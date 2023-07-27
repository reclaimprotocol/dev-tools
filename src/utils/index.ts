const MODE = process.env.NODE_ENV
const sessionId = 'test-session-id'

export default function generateSessionId() {
	if(MODE === 'DEV') {
		return sessionId
	} else if(MODE === 'PROD') {
		return 'session-' + Math.random().toString(36).substring(2, 15)
	} else {
		throw new Error('Unknown mode')
	}
}