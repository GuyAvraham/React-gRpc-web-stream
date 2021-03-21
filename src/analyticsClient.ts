import { grpc } from "@improbable-eng/grpc-web";
import {
  GetQueryResultsRequest,
  QueryRequest,
} from "./proto/qwak/analytics/analytics_pb";
import { AnalyticsQueryService } from "./proto/qwak/analytics/analytics_pb_service";

import { AnalyticsQueryServiceClient } from "./proto/qwak/analytics/analytics_pb_service";

export const analyticsClient = new AnalyticsQueryServiceClient(
  "https://grpc.qwak.ai"
);

export const callQueryResults = async () => {
  let counter = 0;
  let intervalRef: any = { current: null };
  const queryReq: QueryRequest = new QueryRequest();
  queryReq.setQuery("SELECT * FROM qwak_churn_v1");
  console.log("calling query");
  await analyticsClient.query(queryReq, async (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!res) {
      console.log("no id");
      return;
    }
    console.log(res.getQueryId());
    const getQueryReq: GetQueryResultsRequest = new GetQueryResultsRequest();
    getQueryReq.setQueryId(res?.getQueryId());

    const client = grpc.client(AnalyticsQueryService.GetQueryResults, {
      host: "https://grpc.qwak.ai",
    });

    client.onHeaders((headers: grpc.Metadata) => {
      console.log("query.onHeaders", headers);
    });

    client.onMessage((message: Message) => {
      const { status, data } = message.toObject() as Message;
      console.log("status:" + status);
      console.log("data:", data);
      console.log("counter", counter);
      if (status === 1) {
        clearTimeout(intervalRef.current);
        client.finishSend();
        client.close();
        counter = 0;
      }
      if (status === 2) {
        if (counter > 50) {
          clearTimeout(intervalRef.current);
          client.finishSend();
          client.close();
          counter = 0;
          return;
        }
        intervalRef.current = window.setTimeout(() => {
          client.send(getQueryReq);
          counter++;
          console.log("calling GetQueryResults");
        }, 1000);
      }
    });

    client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
      console.log("query.onEnd", code, msg, trailers);
    });

    client.start();
    console.log("calling GetQueryResults");
    client.send(getQueryReq);
  });
};

interface Message {
  status: number;
  data: MessageData;
  nextPageId: string;
}

interface MessageRowData {
  valuesList: [];
}

interface MessageData {
  headersList: Array<string>;
  rowsList: MessageRowData[];
}
