"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBackendClient = void 0;
const nice_grpc_web_1 = require("nice-grpc-web");
const api_client_1 = require("../api-client");
class ChatBackendClient {
    constructor(accessToken, clientType) {
        this.getClient = async () => {
            const client = await (0, api_client_1.makeGrpcClient)(this.accessToken, this.clientType);
            return client;
        };
        this.accessToken = accessToken;
        this.clientType = clientType;
    }
    async generateSessionId() {
        const client = await this.getClient();
        try {
            const response = await client.generateSession({});
            console.log('response received', response);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async joinSession(sessionId) {
        const client = await this.getClient();
        try {
            const response = await client.joinSession({ sessionId });
            console.log('join session response', response);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async sendMessage(message, sessionId) {
        const client = await this.getClient();
        const metadata = new nice_grpc_web_1.Metadata();
        metadata.set('session-id', sessionId);
        metadata.set('client-type', this.clientType);
        metadata.set('Authorization', this.accessToken);
        try {
            const response = await client.sendMessage({
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
    }
    async receiveMessage(sessionId) {
        const client = await this.getClient();
        const metadata = new nice_grpc_web_1.Metadata();
        metadata.set('session-id', sessionId);
        metadata.set('client-type', this.clientType);
        metadata.set('Authorization', this.accessToken);
        const messages = [];
        for await (const response of client.receiveMessage({}, {
            metadata
        })) {
            console.log('response', response);
            // return response
            messages.push(response);
        }
        return messages;
    }
}
exports.ChatBackendClient = ChatBackendClient;
