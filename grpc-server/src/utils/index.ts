import { v4 as uuidv4 } from 'uuid'
import logger from './logger'

const MODE = process.env.NODE_ENV
const sessionId = 'test-session-id'

export default function generateSessionId() {
	if(MODE === 'DEV') {
		return sessionId
	} else if(MODE === 'PROD') {
		logger.info('generating session id')
		return uuidv4()
	} else {
		throw new Error('Unknown mode')
	}
}