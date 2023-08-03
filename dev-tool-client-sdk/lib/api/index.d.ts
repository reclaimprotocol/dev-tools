import { ChatMessage, SessionResponse } from '../generated/channel';
export declare class ChatBackendClient {
    private readonly accessToken;
    private readonly clientType;
    constructor(accessToken: string, clientType: string);
    private getClient;
    generateSessionId(): Promise<SessionResponse>;
    joinSession(sessionId: string): Promise<SessionResponse>;
    sendMessage(message: ChatMessage, sessionId: string): Promise<import("../generated/channel").Empty>;
    receiveMessage(sessionId: string): Promise<ChatMessage[]>;
}
