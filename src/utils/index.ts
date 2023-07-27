const MODE = 'DEV'
const sessionId = 'test-session-id'

export default function generateSessionId() {
    if (MODE === 'DEV') {
        return sessionId
    }
    else {
        return 'session-' + Math.random().toString(36).substring(2, 15)
    }
}