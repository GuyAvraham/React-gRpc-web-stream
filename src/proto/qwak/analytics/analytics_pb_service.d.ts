// package: qwak.analytics
// file: analytics.proto

import * as analytics_pb from "./analytics_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AnalyticsQueryServiceQuery = {
  readonly methodName: string;
  readonly service: typeof AnalyticsQueryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof analytics_pb.QueryRequest;
  readonly responseType: typeof analytics_pb.QueryResponse;
};

type AnalyticsQueryServiceGetQueryResults = {
  readonly methodName: string;
  readonly service: typeof AnalyticsQueryService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof analytics_pb.GetQueryResultsRequest;
  readonly responseType: typeof analytics_pb.GetQueryResultsResponse;
};

type AnalyticsQueryServiceDescribeTable = {
  readonly methodName: string;
  readonly service: typeof AnalyticsQueryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof analytics_pb.DescribeTableRequest;
  readonly responseType: typeof analytics_pb.DescribeTableResponse;
};

type AnalyticsQueryServiceListTables = {
  readonly methodName: string;
  readonly service: typeof AnalyticsQueryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof analytics_pb.ListTableRequest;
  readonly responseType: typeof analytics_pb.ListTableResponse;
};

export class AnalyticsQueryService {
  static readonly serviceName: string;
  static readonly Query: AnalyticsQueryServiceQuery;
  static readonly GetQueryResults: AnalyticsQueryServiceGetQueryResults;
  static readonly DescribeTable: AnalyticsQueryServiceDescribeTable;
  static readonly ListTables: AnalyticsQueryServiceListTables;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AnalyticsQueryServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  query(
    requestMessage: analytics_pb.QueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.QueryResponse|null) => void
  ): UnaryResponse;
  query(
    requestMessage: analytics_pb.QueryRequest,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.QueryResponse|null) => void
  ): UnaryResponse;
  getQueryResults(metadata?: grpc.Metadata): BidirectionalStream<analytics_pb.GetQueryResultsRequest, analytics_pb.GetQueryResultsResponse>;
  describeTable(
    requestMessage: analytics_pb.DescribeTableRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.DescribeTableResponse|null) => void
  ): UnaryResponse;
  describeTable(
    requestMessage: analytics_pb.DescribeTableRequest,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.DescribeTableResponse|null) => void
  ): UnaryResponse;
  listTables(
    requestMessage: analytics_pb.ListTableRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.ListTableResponse|null) => void
  ): UnaryResponse;
  listTables(
    requestMessage: analytics_pb.ListTableRequest,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.ListTableResponse|null) => void
  ): UnaryResponse;
}

