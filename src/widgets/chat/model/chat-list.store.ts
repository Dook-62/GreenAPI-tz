import { IChat } from '@/entities/chat'
import { makeAutoObservable } from 'mobx'

class ChatListStore {
  private _chatList: IChat[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get chatList(): IChat[] {
    return this._chatList
  }

  setChatListMessages(chats: IChat[]) {
    this._chatList = chats
  }
}

export const chatListStore = new ChatListStore()

type StoreKey = 'chatList'

export const useChatListStore = (): Pick<ChatListStore, StoreKey> => {
  return {
    chatList: chatListStore.chatList,
  }
}
