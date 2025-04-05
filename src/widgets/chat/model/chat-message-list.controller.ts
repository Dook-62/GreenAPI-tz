import { ChatMessageListApi } from '../api/chat-message-list.api'
import { chatMessageListStore } from './chat-message-list.store'
import { sortMessagesByDate } from '../lib/sort-messages-by-date'
import { IReceivedMessage, receiveIsIncoming, receiveToChat } from '@/features/chat'
import { chatStore } from '@/entities/chat'

export class ChatMessageListController {
  static async getMessageList(chatId: string, count?: number): Promise<void> {
    try {
      const messages = await ChatMessageListApi.getChatHistory({ chatId, count })
      const sortedMessages = sortMessagesByDate(messages.data)
      chatMessageListStore.setChatListMessages(sortedMessages)
    } catch (e) {
      console.error(e)
    }
  }

  static async updateMessageList(idMessage: string, chatId: string, textMessage?: string): Promise<void> {
    try {
      const message = await ChatMessageListApi.getMessage({ chatId, idMessage })
      chatMessageListStore.updateChatListMessages([{ ...message.data, textMessage }])
    } catch (e) {
      console.error(e)
    }
  }

  static async updateMessageListAfterReceive(data: IReceivedMessage | null): Promise<void> {
    if (!receiveIsIncoming(data)) return
    const chat = receiveToChat(data)
    if (chatStore.selectedChat?.id !== chat.id) return
    void ChatMessageListController.updateMessageList(data.body.idMessage, chat.id, chat.lastMessage)
  }
}
