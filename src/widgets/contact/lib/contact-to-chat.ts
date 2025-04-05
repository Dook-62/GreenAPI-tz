import { IContact } from '@/entities/contact'
import { IChat } from '@/entities/chat'

export function contactToEmptyChat(contact: IContact): IChat {
  return {
    id: `${contact.phone}@c.us`,
    timestamp: Date.now(),
    lastMessage: '',
  }
}
