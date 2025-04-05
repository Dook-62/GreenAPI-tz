import { ISendMessage, ISendMessagePayload } from './chat-send-message.interfaces'
import { ChatSendMessageApi } from '@/features/chat/api/chat-send-message.api.ts'

export class ChatSendMessageController {
  static async sendMessage(payload: ISendMessagePayload): Promise<ISendMessage | undefined> {
    try {
      const response = await ChatSendMessageApi.sendMessage(payload)
      return response.data
    } catch (e) {
      // Empty
      console.error(e)
    }
  }
}
