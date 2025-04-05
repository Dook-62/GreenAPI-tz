import { IReceivedMessage } from '@/features/chat'
import { IChat } from '@/entities/chat'

export function receiveToChat(receive: IReceivedMessage): IChat {
  const { body } = receive
  const messageData = body.messageData
  return {
    id: body.senderData.chatId,
    timestamp: body?.timestamp,
    lastMessage: messageData.textMessageData?.textMessage || messageData.extendedTextMessageData?.text,
  }
}
