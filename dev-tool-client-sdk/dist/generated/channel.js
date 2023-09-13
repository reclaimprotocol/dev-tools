"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionServiceDefinition = exports.ChatMessage = exports.SessionResponse = exports.JoinSessionRequest = exports.Empty = exports.chatMessageTypeToJSON = exports.chatMessageTypeFromJSON = exports.ChatMessageType = exports.sessionResponseStatusTypeToJSON = exports.sessionResponseStatusTypeFromJSON = exports.SessionResponseStatusType = exports.clientTypeToJSON = exports.clientTypeFromJSON = exports.ClientType = exports.protobufPackage = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "channel";
var ClientType;
(function (ClientType) {
    ClientType[ClientType["WEB"] = 0] = "WEB";
    ClientType[ClientType["MOBILE"] = 1] = "MOBILE";
    ClientType[ClientType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClientType || (exports.ClientType = ClientType = {}));
function clientTypeFromJSON(object) {
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
exports.clientTypeFromJSON = clientTypeFromJSON;
function clientTypeToJSON(object) {
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
exports.clientTypeToJSON = clientTypeToJSON;
var SessionResponseStatusType;
(function (SessionResponseStatusType) {
    SessionResponseStatusType[SessionResponseStatusType["SUCCESS"] = 0] = "SUCCESS";
    SessionResponseStatusType[SessionResponseStatusType["FAILURE"] = 1] = "FAILURE";
    SessionResponseStatusType[SessionResponseStatusType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SessionResponseStatusType || (exports.SessionResponseStatusType = SessionResponseStatusType = {}));
function sessionResponseStatusTypeFromJSON(object) {
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
exports.sessionResponseStatusTypeFromJSON = sessionResponseStatusTypeFromJSON;
function sessionResponseStatusTypeToJSON(object) {
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
exports.sessionResponseStatusTypeToJSON = sessionResponseStatusTypeToJSON;
var ChatMessageType;
(function (ChatMessageType) {
    ChatMessageType[ChatMessageType["M_TARGET_URL_RECEIVED"] = 0] = "M_TARGET_URL_RECEIVED";
    ChatMessageType[ChatMessageType["W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED"] = 1] = "W_NETWORK_REQUESTS_AND_RESPONSES_RECEIVED";
    ChatMessageType[ChatMessageType["W_POTENTIAL_NETWORK_REQUEST"] = 2] = "W_POTENTIAL_NETWORK_REQUEST";
    ChatMessageType[ChatMessageType["W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED"] = 3] = "W_POTENTIAL_NETWORK_REQUEST_TEST_RESULT_RECEIVED";
    ChatMessageType[ChatMessageType["W_LOGIN_URL_RECEIVED"] = 4] = "W_LOGIN_URL_RECEIVED";
    ChatMessageType[ChatMessageType["W_RECLAIM_URL"] = 5] = "W_RECLAIM_URL";
    ChatMessageType[ChatMessageType["W_RECLAIM_URL_TEST_RESULT_RECEIVED"] = 6] = "W_RECLAIM_URL_TEST_RESULT_RECEIVED";
    ChatMessageType[ChatMessageType["TARGET_URL"] = 7] = "TARGET_URL";
    ChatMessageType[ChatMessageType["M_NETWORK_REQUESTS_AND_RESPONSES"] = 8] = "M_NETWORK_REQUESTS_AND_RESPONSES";
    ChatMessageType[ChatMessageType["M_POTENTIAL_NETWORK_REQUEST_RECEIVED"] = 9] = "M_POTENTIAL_NETWORK_REQUEST_RECEIVED";
    ChatMessageType[ChatMessageType["M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT"] = 10] = "M_POTENTIAL_NETWORK_REQUEST_TEST_RESULT";
    ChatMessageType[ChatMessageType["M_LOGIN_URL"] = 11] = "M_LOGIN_URL";
    ChatMessageType[ChatMessageType["M_RECLAIM_URL_RECEIVED"] = 12] = "M_RECLAIM_URL_RECEIVED";
    ChatMessageType[ChatMessageType["M_RECLAIM_URL_TEST_RESULT"] = 13] = "M_RECLAIM_URL_TEST_RESULT";
    ChatMessageType[ChatMessageType["CONNECTION_PENDING"] = 14] = "CONNECTION_PENDING";
    ChatMessageType[ChatMessageType["CONNECTED"] = 15] = "CONNECTED";
    ChatMessageType[ChatMessageType["FORCE_REFRESH"] = 16] = "FORCE_REFRESH";
    ChatMessageType[ChatMessageType["CAPTURE_CURRENT_PAGE_SOURCE"] = 17] = "CAPTURE_CURRENT_PAGE_SOURCE";
    ChatMessageType[ChatMessageType["W_SET_CURRENT_URL"] = 19] = "W_SET_CURRENT_URL";
    /** M_SET_CURRENT_URL - to be sent by app to web */
    ChatMessageType[ChatMessageType["M_SET_CURRENT_URL"] = 20] = "M_SET_CURRENT_URL";
    ChatMessageType[ChatMessageType["W_SET_NEW_ACCESS_TOKEN"] = 21] = "W_SET_NEW_ACCESS_TOKEN";
    ChatMessageType[ChatMessageType["W_CLEAR_COOKIES"] = 22] = "W_CLEAR_COOKIES";
    ChatMessageType[ChatMessageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChatMessageType || (exports.ChatMessageType = ChatMessageType = {}));
function chatMessageTypeFromJSON(object) {
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
        case 19:
        case "W_SET_CURRENT_URL":
            return ChatMessageType.W_SET_CURRENT_URL;
        case 20:
        case "M_SET_CURRENT_URL":
            return ChatMessageType.M_SET_CURRENT_URL;
        case 21:
        case "W_SET_NEW_ACCESS_TOKEN":
            return ChatMessageType.W_SET_NEW_ACCESS_TOKEN;
        case 22:
        case "W_CLEAR_COOKIES":
            return ChatMessageType.W_CLEAR_COOKIES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChatMessageType.UNRECOGNIZED;
    }
}
exports.chatMessageTypeFromJSON = chatMessageTypeFromJSON;
function chatMessageTypeToJSON(object) {
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
        case ChatMessageType.W_SET_CURRENT_URL:
            return "W_SET_CURRENT_URL";
        case ChatMessageType.M_SET_CURRENT_URL:
            return "M_SET_CURRENT_URL";
        case ChatMessageType.W_SET_NEW_ACCESS_TOKEN:
            return "W_SET_NEW_ACCESS_TOKEN";
        case ChatMessageType.W_CLEAR_COOKIES:
            return "W_CLEAR_COOKIES";
        case ChatMessageType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.chatMessageTypeToJSON = chatMessageTypeToJSON;
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.Empty.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
};
function createBaseJoinSessionRequest() {
    return { sessionId: "" };
}
exports.JoinSessionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        return obj;
    },
    create(base) {
        return exports.JoinSessionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseJoinSessionRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSessionResponse() {
    return { sessionId: "", status: 0 };
}
exports.SessionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.status = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            status: isSet(object.status) ? sessionResponseStatusTypeFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.status !== 0) {
            obj.status = sessionResponseStatusTypeToJSON(message.status);
        }
        return obj;
    },
    create(base) {
        return exports.SessionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSessionResponse();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseChatMessage() {
    return { message: "", type: 0 };
}
exports.ChatMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.type = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            message: isSet(object.message) ? String(object.message) : "",
            type: isSet(object.type) ? chatMessageTypeFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.type !== 0) {
            obj.type = chatMessageTypeToJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return exports.ChatMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseChatMessage();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
exports.SessionServiceDefinition = {
    name: "SessionService",
    fullName: "channel.SessionService",
    methods: {
        generateSession: {
            name: "GenerateSession",
            requestType: exports.Empty,
            requestStream: false,
            responseType: exports.SessionResponse,
            responseStream: false,
            options: {},
        },
        joinSession: {
            name: "JoinSession",
            requestType: exports.JoinSessionRequest,
            requestStream: false,
            responseType: exports.SessionResponse,
            responseStream: false,
            options: {},
        },
        sendMessage: {
            name: "SendMessage",
            requestType: exports.ChatMessage,
            requestStream: false,
            responseType: exports.Empty,
            responseStream: false,
            options: {},
        },
        receiveMessage: {
            name: "ReceiveMessage",
            requestType: exports.Empty,
            requestStream: false,
            responseType: exports.ChatMessage,
            responseStream: true,
            options: {},
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
