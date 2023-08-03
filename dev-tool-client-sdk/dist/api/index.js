"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBackendClient = void 0;
const nice_grpc_web_1 = require("nice-grpc-web");
const api_client_1 = require("../api-client");
class ChatBackendClient {
    constructor(accessToken, clientType) {
        this.getClient = () => __awaiter(this, void 0, void 0, function* () {
            const client = yield (0, api_client_1.makeGrpcClient)(this.accessToken, this.clientType);
            return client;
        });
        this.accessToken = accessToken;
        this.clientType = clientType;
    }
    generateSessionId() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.getClient();
            try {
                const response = yield client.generateSession({});
                console.log('response received', response);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
    joinSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.getClient();
            try {
                const response = yield client.joinSession({ sessionId });
                console.log('join session response', response);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
    sendMessage(message, sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.getClient();
            const metadata = new nice_grpc_web_1.Metadata();
            metadata.set('session-id', sessionId);
            metadata.set('client-type', this.clientType);
            metadata.set('Authorization', this.accessToken);
            try {
                const response = yield client.sendMessage({
                    message: message.message,
                    type: message.type
                }, {
                    metadata
                });
                console.log('send message response', response);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
    receiveMessage(sessionId) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.getClient();
            const metadata = new nice_grpc_web_1.Metadata();
            metadata.set('session-id', sessionId);
            metadata.set('client-type', this.clientType);
            metadata.set('Authorization', this.accessToken);
            const messages = [];
            try {
                for (var _d = true, _e = __asyncValues(client.receiveMessage({}, {
                    metadata
                })), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                    _c = _f.value;
                    _d = false;
                    const response = _c;
                    console.log('response', response);
                    // return response
                    messages.push(response);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return messages;
        });
    }
}
exports.ChatBackendClient = ChatBackendClient;
