import { chatStore, IChat } from '@/entities/chat'

export class ChatCreateController {
  static selectChat(chat: IChat): void {
    chatStore.setSelectedChat(chat)
  }
}
