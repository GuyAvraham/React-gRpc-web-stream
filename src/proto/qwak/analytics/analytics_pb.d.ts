// package: qwak.analytics
// file: analytics.proto

import * as jspb from "google-protobuf";

export class QueryRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    query: string,
  }
}

export class QueryResponse extends jspb.Message {
  getQueryId(): string;
  setQueryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    queryId: string,
  }
}

export class GetQueryResultsRequest extends jspb.Message {
  getQueryId(): string;
  setQueryId(value: string): void;

  getPageId(): string;
  setPageId(value: string): void;

  getMaxResults(): number;
  setMaxResults(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueryResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueryResultsRequest): GetQueryResultsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueryResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueryResultsRequest;
  static deserializeBinaryFromReader(message: GetQueryResultsRequest, reader: jspb.BinaryReader): GetQueryResultsRequest;
}

export namespace GetQueryResultsRequest {
  export type AsObject = {
    queryId: string,
    pageId: string,
    maxResults: number,
  }
}

export class GetQueryResultsResponse extends jspb.Message {
  getStatus(): QueryStatusMap[keyof QueryStatusMap];
  setStatus(value: QueryStatusMap[keyof QueryStatusMap]): void;

  getNextPageId(): string;
  setNextPageId(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ResultData | undefined;
  setData(value?: ResultData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueryResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueryResultsResponse): GetQueryResultsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueryResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueryResultsResponse;
  static deserializeBinaryFromReader(message: GetQueryResultsResponse, reader: jspb.BinaryReader): GetQueryResultsResponse;
}

export namespace GetQueryResultsResponse {
  export type AsObject = {
    status: QueryStatusMap[keyof QueryStatusMap],
    nextPageId: string,
    data?: ResultData.AsObject,
  }
}

export class ResultData extends jspb.Message {
  clearHeadersList(): void;
  getHeadersList(): Array<string>;
  setHeadersList(value: Array<string>): void;
  addHeaders(value: string, index?: number): string;

  clearRowsList(): void;
  getRowsList(): Array<ResultRow>;
  setRowsList(value: Array<ResultRow>): void;
  addRows(value?: ResultRow, index?: number): ResultRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultData.AsObject;
  static toObject(includeInstance: boolean, msg: ResultData): ResultData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultData;
  static deserializeBinaryFromReader(message: ResultData, reader: jspb.BinaryReader): ResultData;
}

export namespace ResultData {
  export type AsObject = {
    headersList: Array<string>,
    rowsList: Array<ResultRow.AsObject>,
  }
}

export class ResultRow extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultRow.AsObject;
  static toObject(includeInstance: boolean, msg: ResultRow): ResultRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultRow;
  static deserializeBinaryFromReader(message: ResultRow, reader: jspb.BinaryReader): ResultRow;
}

export namespace ResultRow {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class DescribeTableRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeTableRequest): DescribeTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeTableRequest;
  static deserializeBinaryFromReader(message: DescribeTableRequest, reader: jspb.BinaryReader): DescribeTableRequest;
}

export namespace DescribeTableRequest {
  export type AsObject = {
    tableName: string,
  }
}

export class DescribeTableResponse extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<TableColumn>;
  setColumnsList(value: Array<TableColumn>): void;
  addColumns(value?: TableColumn, index?: number): TableColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeTableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeTableResponse): DescribeTableResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeTableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeTableResponse;
  static deserializeBinaryFromReader(message: DescribeTableResponse, reader: jspb.BinaryReader): DescribeTableResponse;
}

export namespace DescribeTableResponse {
  export type AsObject = {
    tableName: string,
    columnsList: Array<TableColumn.AsObject>,
  }
}

export class TableColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableColumn.AsObject;
  static toObject(includeInstance: boolean, msg: TableColumn): TableColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableColumn;
  static deserializeBinaryFromReader(message: TableColumn, reader: jspb.BinaryReader): TableColumn;
}

export namespace TableColumn {
  export type AsObject = {
    name: string,
    type: string,
  }
}

export class ListTableRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTableRequest): ListTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTableRequest;
  static deserializeBinaryFromReader(message: ListTableRequest, reader: jspb.BinaryReader): ListTableRequest;
}

export namespace ListTableRequest {
  export type AsObject = {
  }
}

export class ListTableResponse extends jspb.Message {
  clearTableNamesList(): void;
  getTableNamesList(): Array<string>;
  setTableNamesList(value: Array<string>): void;
  addTableNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTableResponse): ListTableResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTableResponse;
  static deserializeBinaryFromReader(message: ListTableResponse, reader: jspb.BinaryReader): ListTableResponse;
}

export namespace ListTableResponse {
  export type AsObject = {
    tableNamesList: Array<string>,
  }
}

export interface QueryStatusMap {
  INVALID: 0;
  SUCCESS: 1;
  PENDING: 2;
  CANCELED: 3;
  FAILED: 4;
}

export const QueryStatus: QueryStatusMap;

