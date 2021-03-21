// package: qwak.analytics
// file: analytics.proto

var analytics_pb = require("./analytics_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AnalyticsQueryService = (function () {
  function AnalyticsQueryService() {}
  AnalyticsQueryService.serviceName = "qwak.analytics.AnalyticsQueryService";
  return AnalyticsQueryService;
}());

AnalyticsQueryService.Query = {
  methodName: "Query",
  service: AnalyticsQueryService,
  requestStream: false,
  responseStream: false,
  requestType: analytics_pb.QueryRequest,
  responseType: analytics_pb.QueryResponse
};

AnalyticsQueryService.GetQueryResults = {
  methodName: "GetQueryResults",
  service: AnalyticsQueryService,
  requestStream: true,
  responseStream: true,
  requestType: analytics_pb.GetQueryResultsRequest,
  responseType: analytics_pb.GetQueryResultsResponse
};

AnalyticsQueryService.DescribeTable = {
  methodName: "DescribeTable",
  service: AnalyticsQueryService,
  requestStream: false,
  responseStream: false,
  requestType: analytics_pb.DescribeTableRequest,
  responseType: analytics_pb.DescribeTableResponse
};

AnalyticsQueryService.ListTables = {
  methodName: "ListTables",
  service: AnalyticsQueryService,
  requestStream: false,
  responseStream: false,
  requestType: analytics_pb.ListTableRequest,
  responseType: analytics_pb.ListTableResponse
};

exports.AnalyticsQueryService = AnalyticsQueryService;

function AnalyticsQueryServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AnalyticsQueryServiceClient.prototype.query = function query(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AnalyticsQueryService.Query, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AnalyticsQueryServiceClient.prototype.getQueryResults = function getQueryResults(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AnalyticsQueryService.GetQueryResults, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AnalyticsQueryServiceClient.prototype.describeTable = function describeTable(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AnalyticsQueryService.DescribeTable, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AnalyticsQueryServiceClient.prototype.listTables = function listTables(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AnalyticsQueryService.ListTables, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AnalyticsQueryServiceClient = AnalyticsQueryServiceClient;

