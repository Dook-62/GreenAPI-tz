import { IChatMessage } from '@/entities/chat'
import { makeAutoObservable } from 'mobx'

class ChatMessageListStore {
  private _messageList: IChatMessage[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get messageList(): IChatMessage[] {
    return this._messageList
  }

  setChatListMessages(messages: IChatMessage[]) {
    this._messageList = messages
  }

  updateChatListMessages(messages: IChatMessage[]) {
    this._messageList = [...this._messageList, ...messages]
  }
}

export const chatMessageListStore = new ChatMessageListStore()

type StoreKey = 'messageList'

export const useChatMessageListStore = (): Pick<ChatMessageListStore, StoreKey> => {
  return {
    messageList: chatMessageListStore.messageList,
  }
}
