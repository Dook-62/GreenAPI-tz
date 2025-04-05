import { IChatMessage } from '@/entities/chat'

export function sortMessagesByDate(messages: IChatMessage[]): IChatMessage[] {
  return messages.sort((a, b) => a.timestamp - b.timestamp)
}
