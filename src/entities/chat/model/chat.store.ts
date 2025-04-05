import { IChat } from './chat-messages.interfaces'
import { makeAutoObservable } from 'mobx'

class ChatStore {
  private _selectedChat: IChat | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get selectedChat(): IChat | null {
    return this._selectedChat
  }

  setSelectedChat(chat: IChat): void {
    this._selectedChat = chat
  }

  resetSelectedChat(): void {
    this._selectedChat = null
  }
}

export const chatStore = new ChatStore()

type StoreKey = 'selectedChat'

export const useChatStore = (): Pick<ChatStore, StoreKey> => {
  return {
    selectedChat: chatStore.selectedChat,
  }
}
