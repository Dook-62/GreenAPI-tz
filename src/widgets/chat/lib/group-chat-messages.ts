import { IChat, IChatMessage } from '@/entities/chat'

export function groupChatMessages(messages: IChatMessage[]): IChat[] {
  const chatMessages = new Map<string, IChat>()

  for (const msg of messages) {
    const existingChat = chatMessages.get(msg.chatId)
    if (!existingChat || existingChat.timestamp < msg.timestamp) {
      chatMessages.set(msg.chatId, {
        id: msg.chatId,
        timestamp: msg.timestamp,
        contact: msg.contact,
        lastMessage: msg.textMessage,
      })
    }
  }

  return Array.from(chatMessages.values()).sort((a, b) => b.timestamp - a.timestamp)
}
