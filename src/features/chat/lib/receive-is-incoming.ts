import { IReceivedMessage } from '../model/chat-message-receive.interfaces'

export function receiveIsIncoming(receive: IReceivedMessage | null): receive is IReceivedMessage {
  return receive?.body?.typeWebhook === 'incomingMessageReceived'
}
