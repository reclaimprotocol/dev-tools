/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "channel";

export enum ClientType {
  WEB = 0,
  MOBILE = 1,
  UNRECOGNIZED = -1,
}

export function clientTypeFromJSON(object: any): ClientType {
  switch (object) {
    case 0:
    case "WEB":
      return ClientType.WEB;
    case 1:
    case "MOBILE":
      return ClientType.MOBILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientType.UNRECOGNIZED;
  }
}

export function clientTypeToJSON(object: ClientType): string {
  switch (object) {
    case ClientType.WEB:
      return "WEB";
    case ClientType.MOBILE:
      return "MOBILE";
    case ClientType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SessionResponseStatusType {
  SUCCESS = 0,
  FAILURE = 1,
  UNRECOGNIZED = -1,
}

export function sessionResponseStatusTypeFromJSON(object: any): SessionResponseStatusType {
  switch (object) {
    case 0:
    case "SUCCESS":
      return SessionResponseStatusType.SUCCESS;
    case 1:
    case "FAILURE":
      return SessionResponseStatusType.FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SessionResponseStatusType.UNRECOGNIZED;
  }
}

export function sessionResponseStatusTypeToJSON(object: SessionResponseStatusType): string {
  switch (object) {
    case SessionResponseStatusType.SUCCESS:
      return "SUCCESS";
    case SessionResponseStatusType.FAILURE:
      return "FAILURE";
    case SessionResponseStatusType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChatMessageType {
  M_TARGET_URL_RECEIVED = 0,
  W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED = 1,
  W_POTENTIAL_NETWORK_REQUEST = 2,
  W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED = 3,
  W_LOGIN_URL_RECEIVED = 4,
  W_RECLAIM_URL = 5,
  W_RECLAIM_URL_TEST_RESULT_RECEIVED = 6,
  TARGET_URL = 7,
  M_NETWORK_REQUESTS_AND_RESPONSES = 8,
  M_POTENTIAL_NETWORK_REQUEST_RECEIVED = 9,
  M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT = 10,
  M_LOGIN_URL = 11,
  M_RECLAIM_URL_RECEIVED = 12,
  M_RECLAIM_URL_TEST_RESULT = 13,
  CONNECTION_PENDING = 14,
  CONNECTED = 15,
  FORCE_REFRESH = 16,
  CAPTURE_CURRENT_PAGE_SOURCE = 17,
  CAPTURE_COOKIES = 18,
  UNRECOGNIZED = -1,
}

export function chatMessageTypeFromJSON(object: any): ChatMessageType {
  switch (object) {
    case 0:
    case "M_TARGET_URL_RECEIVED":
      return ChatMessageType.M_TARGET_URL_RECEIVED;
    case 1:
    case "W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED":
      return ChatMessageType.W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED;
    case 2:
    case "W_POTENTIAL_NETWORK_REQUEST":
      return ChatMessageType.W_POTENTIAL_NETWORK_REQUEST;
    case 3:
    case "W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED":
      return ChatMessageType.W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED;
    case 4:
    case "W_LOGIN_URL_RECEIVED":
      return ChatMessageType.W_LOGIN_URL_RECEIVED;
    case 5:
    case "W_RECLAIM_URL":
      return ChatMessageType.W_RECLAIM_URL;
    case 6:
    case "W_RECLAIM_URL_TEST_RESULT_RECEIVED":
      return ChatMessageType.W_RECLAIM_URL_TEST_RESULT_RECEIVED;
    case 7:
    case "TARGET_URL":
      return ChatMessageType.TARGET_URL;
    case 8:
    case "M_NETWORK_REQUESTS_AND_RESPONSES":
      return ChatMessageType.M_NETWORK_REQUESTS_AND_RESPONSES;
    case 9:
    case "M_POTENTIAL_NETWORK_REQUEST_RECEIVED":
      return ChatMessageType.M_POTENTIAL_NETWORK_REQUEST_RECEIVED;
    case 10:
    case "M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT":
      return ChatMessageType.M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT;
    case 11:
    case "M_LOGIN_URL":
      return ChatMessageType.M_LOGIN_URL;
    case 12:
    case "M_RECLAIM_URL_RECEIVED":
      return ChatMessageType.M_RECLAIM_URL_RECEIVED;
    case 13:
    case "M_RECLAIM_URL_TEST_RESULT":
      return ChatMessageType.M_RECLAIM_URL_TEST_RESULT;
    case 14:
    case "CONNECTION_PENDING":
      return ChatMessageType.CONNECTION_PENDING;
    case 15:
    case "CONNECTED":
      return ChatMessageType.CONNECTED;
    case 16:
    case "FORCE_REFRESH":
      return ChatMessageType.FORCE_REFRESH;
    case 17:
    case "CAPTURE_CURRENT_PAGE_SOURCE":
      return ChatMessageType.CAPTURE_CURRENT_PAGE_SOURCE;
    case 18:
    case "CAPTURE_COOKIES":
      return ChatMessageType.CAPTURE_COOKIES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChatMessageType.UNRECOGNIZED;
  }
}

export function chatMessageTypeToJSON(object: ChatMessageType): string {
  switch (object) {
    case ChatMessageType.M_TARGET_URL_RECEIVED:
      return "M_TARGET_URL_RECEIVED";
    case ChatMessageType.W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED:
      return "W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED";
    case ChatMessageType.W_POTENTIAL_NETWORK_REQUEST:
      return "W_POTENTIAL_NETWORK_REQUEST";
    case ChatMessageType.W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED:
      return "W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED";
    case ChatMessageType.W_LOGIN_URL_RECEIVED:
      return "W_LOGIN_URL_RECEIVED";
    case ChatMessageType.W_RECLAIM_URL:
      return "W_RECLAIM_URL";
    case ChatMessageType.W_RECLAIM_URL_TEST_RESULT_RECEIVED:
      return "W_RECLAIM_URL_TEST_RESULT_RECEIVED";
    case ChatMessageType.TARGET_URL:
      return "TARGET_URL";
    case ChatMessageType.M_NETWORK_REQUESTS_AND_RESPONSES:
      return "M_NETWORK_REQUESTS_AND_RESPONSES";
    case ChatMessageType.M_POTENTIAL_NETWORK_REQUEST_RECEIVED:
      return "M_POTENTIAL_NETWORK_REQUEST_RECEIVED";
    case ChatMessageType.M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT:
      return "M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT";
    case ChatMessageType.M_LOGIN_URL:
      return "M_LOGIN_URL";
    case ChatMessageType.M_RECLAIM_URL_RECEIVED:
      return "M_RECLAIM_URL_RECEIVED";
    case ChatMessageType.M_RECLAIM_URL_TEST_RESULT:
      return "M_RECLAIM_URL_TEST_RESULT";
    case ChatMessageType.CONNECTION_PENDING:
      return "CONNECTION_PENDING";
    case ChatMessageType.CONNECTED:
      return "CONNECTED";
    case ChatMessageType.FORCE_REFRESH:
      return "FORCE_REFRESH";
    case ChatMessageType.CAPTURE_CURRENT_PAGE_SOURCE:
      return "CAPTURE_CURRENT_PAGE_SOURCE";
    case ChatMessageType.CAPTURE_COOKIES:
      return "CAPTURE_COOKIES";
    case ChatMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Empty {
}

export interface JoinSessionRequest {
  sessionId: string;
}

export interface SessionResponse {
  sessionId: string;
  status: SessionResponseStatusType;
}

export interface ChatMessage {
  message: string;
  type: ChatMessageType;
}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Empty>): Empty {
    return Empty.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseJoinSessionRequest(): JoinSessionRequest {
  return { sessionId: "" };
}

export const JoinSessionRequest = {
  encode(message: JoinSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JoinSessionRequest {
    return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "" };
  },

  toJSON(message: JoinSessionRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create(base?: DeepPartial<JoinSessionRequest>): JoinSessionRequest {
    return JoinSessionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<JoinSessionRequest>): JoinSessionRequest {
    const message = createBaseJoinSessionRequest();
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseSessionResponse(): SessionResponse {
  return { sessionId: "", status: 0 };
}

export const SessionResponse = {
  encode(message: SessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionResponse {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      status: isSet(object.status) ? sessionResponseStatusTypeFromJSON(object.status) : 0,
    };
  },

  toJSON(message: SessionResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.status !== 0) {
      obj.status = sessionResponseStatusTypeToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<SessionResponse>): SessionResponse {
    return SessionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SessionResponse>): SessionResponse {
    const message = createBaseSessionResponse();
    message.sessionId = object.sessionId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseChatMessage(): ChatMessage {
  return { message: "", type: 0 };
}

export const ChatMessage = {
  encode(message: ChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChatMessage {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      type: isSet(object.type) ? chatMessageTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: ChatMessage): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.type !== 0) {
      obj.type = chatMessageTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<ChatMessage>): ChatMessage {
    return ChatMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChatMessage>): ChatMessage {
    const message = createBaseChatMessage();
    message.message = object.message ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

export type SessionServiceDefinition = typeof SessionServiceDefinition;
export const SessionServiceDefinition = {
  name: "SessionService",
  fullName: "channel.SessionService",
  methods: {
    generateSession: {
      name: "GenerateSession",
      requestType: Empty,
      requestStream: false,
      responseType: SessionResponse,
      responseStream: false,
      options: {},
    },
    joinSession: {
      name: "JoinSession",
      requestType: JoinSessionRequest,
      requestStream: false,
      responseType: SessionResponse,
      responseStream: false,
      options: {},
    },
    sendMessage: {
      name: "SendMessage",
      requestType: ChatMessage,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    receiveMessage: {
      name: "ReceiveMessage",
      requestType: Empty,
      requestStream: false,
      responseType: ChatMessage,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface SessionServiceImplementation<CallContextExt = {}> {
  generateSession(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<SessionResponse>>;
  joinSession(
    request: JoinSessionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SessionResponse>>;
  sendMessage(request: ChatMessage, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  receiveMessage(
    request: Empty,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ChatMessage>>;
}

export interface SessionServiceClient<CallOptionsExt = {}> {
  generateSession(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<SessionResponse>;
  joinSession(
    request: DeepPartial<JoinSessionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SessionResponse>;
  sendMessage(request: DeepPartial<ChatMessage>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  receiveMessage(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): AsyncIterable<ChatMessage>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
