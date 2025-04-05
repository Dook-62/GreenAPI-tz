import { ChatListApi } from '../api/chat-list.api'
import { groupChatMessages } from '../lib/group-chat-messages'
import { chatListStore } from '../model/chat-list.store'
import { IChat } from '@/entities/chat'
import { IReceivedMessage, receiveIsIncoming, receiveToChat } from '@/features/chat'

export class ChatListController {
  static async getChatList(): Promise<void> {
    try {
      const lastIncoming = await ChatListApi.getLastIncomingChatMessages()
      const lastOutgoing = await ChatListApi.getLastOutgoingChatMessages()
      chatListStore.setChatListMessages(groupChatMessages([...lastIncoming.data, ...lastOutgoing.data]))
    } catch (e) {
      // Empty
      console.error(e)
    }
  }

  static async updateChatList(chat: IChat): Promise<void> {
    try {
      const chatList = [...chatListStore.chatList]
      const foundIdx = chatList.findIndex((item) => item.id === chat.id)

      if (foundIdx < 0) return await ChatListController.getChatList()

      const result: IChat = {
        ...chatList[foundIdx],
        lastMessage: chat.lastMessage,
        timestamp: chat.timestamp,
      }

      chatListStore.setChatListMessages([result, ...chatList.slice(0, foundIdx), ...chatList.slice(foundIdx + 1)])
    } catch (e) {
      // Empty
      console.error(e)
    }
  }

  static async updateChatListAfterReceive(data: IReceivedMessage | null): Promise<void> {
    if (!receiveIsIncoming(data)) return
    void ChatListController.updateChatList(receiveToChat(data))
  }
}
