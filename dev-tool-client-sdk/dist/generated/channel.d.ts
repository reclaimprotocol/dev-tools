import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "channel";
export declare enum ClientType {
    WEB = 0,
    MOBILE = 1,
    UNRECOGNIZED = -1
}
export declare function clientTypeFromJSON(object: any): ClientType;
export declare function clientTypeToJSON(object: ClientType): string;
export declare enum SessionResponseStatusType {
    SUCCESS = 0,
    FAILURE = 1,
    UNRECOGNIZED = -1
}
export declare function sessionResponseStatusTypeFromJSON(object: any): SessionResponseStatusType;
export declare function sessionResponseStatusTypeToJSON(object: SessionResponseStatusType): string;
export declare enum ChatMessageType {
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
    W_SET_CURRENT_URL = 19,
    /** M_SET_CURRENT_URL - to be sent by app to web */
    M_SET_CURRENT_URL = 20,
    M_SET_NEW_ACCESS_TOKEN = 21,
    M_CLEAR_COOKIES = 22,
    UNRECOGNIZED = -1
}
export declare function chatMessageTypeFromJSON(object: any): ChatMessageType;
export declare function chatMessageTypeToJSON(object: ChatMessageType): string;
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
export declare const Empty: {
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    create(base?: DeepPartial<Empty>): Empty;
    fromPartial(_: DeepPartial<Empty>): Empty;
};
export declare const JoinSessionRequest: {
    encode(message: JoinSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JoinSessionRequest;
    fromJSON(object: any): JoinSessionRequest;
    toJSON(message: JoinSessionRequest): unknown;
    create(base?: DeepPartial<JoinSessionRequest>): JoinSessionRequest;
    fromPartial(object: DeepPartial<JoinSessionRequest>): JoinSessionRequest;
};
export declare const SessionResponse: {
    encode(message: SessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SessionResponse;
    fromJSON(object: any): SessionResponse;
    toJSON(message: SessionResponse): unknown;
    create(base?: DeepPartial<SessionResponse>): SessionResponse;
    fromPartial(object: DeepPartial<SessionResponse>): SessionResponse;
};
export declare const ChatMessage: {
    encode(message: ChatMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage;
    fromJSON(object: any): ChatMessage;
    toJSON(message: ChatMessage): unknown;
    create(base?: DeepPartial<ChatMessage>): ChatMessage;
    fromPartial(object: DeepPartial<ChatMessage>): ChatMessage;
};
export type SessionServiceDefinition = typeof SessionServiceDefinition;
export declare const SessionServiceDefinition: {
    readonly name: "SessionService";
    readonly fullName: "channel.SessionService";
    readonly methods: {
        readonly generateSession: {
            readonly name: "GenerateSession";
            readonly requestType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: DeepPartial<Empty>): Empty;
                fromPartial(_: DeepPartial<Empty>): Empty;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SessionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SessionResponse;
                fromJSON(object: any): SessionResponse;
                toJSON(message: SessionResponse): unknown;
                create(base?: DeepPartial<SessionResponse>): SessionResponse;
                fromPartial(object: DeepPartial<SessionResponse>): SessionResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly joinSession: {
            readonly name: "JoinSession";
            readonly requestType: {
                encode(message: JoinSessionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): JoinSessionRequest;
                fromJSON(object: any): JoinSessionRequest;
                toJSON(message: JoinSessionRequest): unknown;
                create(base?: DeepPartial<JoinSessionRequest>): JoinSessionRequest;
                fromPartial(object: DeepPartial<JoinSessionRequest>): JoinSessionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SessionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SessionResponse;
                fromJSON(object: any): SessionResponse;
                toJSON(message: SessionResponse): unknown;
                create(base?: DeepPartial<SessionResponse>): SessionResponse;
                fromPartial(object: DeepPartial<SessionResponse>): SessionResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sendMessage: {
            readonly name: "SendMessage";
            readonly requestType: {
                encode(message: ChatMessage, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage;
                fromJSON(object: any): ChatMessage;
                toJSON(message: ChatMessage): unknown;
                create(base?: DeepPartial<ChatMessage>): ChatMessage;
                fromPartial(object: DeepPartial<ChatMessage>): ChatMessage;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: DeepPartial<Empty>): Empty;
                fromPartial(_: DeepPartial<Empty>): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly receiveMessage: {
            readonly name: "ReceiveMessage";
            readonly requestType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: DeepPartial<Empty>): Empty;
                fromPartial(_: DeepPartial<Empty>): Empty;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ChatMessage, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage;
                fromJSON(object: any): ChatMessage;
                toJSON(message: ChatMessage): unknown;
                create(base?: DeepPartial<ChatMessage>): ChatMessage;
                fromPartial(object: DeepPartial<ChatMessage>): ChatMessage;
            };
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
export interface SessionServiceImplementation<CallContextExt = {}> {
    generateSession(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<SessionResponse>>;
    joinSession(request: JoinSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SessionResponse>>;
    sendMessage(request: ChatMessage, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    receiveMessage(request: Empty, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<ChatMessage>>;
}
export interface SessionServiceClient<CallOptionsExt = {}> {
    generateSession(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<SessionResponse>;
    joinSession(request: DeepPartial<JoinSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<SessionResponse>;
    sendMessage(request: DeepPartial<ChatMessage>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    receiveMessage(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): AsyncIterable<ChatMessage>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
export {};
