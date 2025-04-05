export interface IGetChatHistoryPayload {
  chatId: string
  count?: number
}

export interface IGetMessagePayload {
  chatId: string
  idMessage: string
}
