import { AxiosResponse } from 'axios'
import { IChatMessage } from '@/entities/chat'
import { Api } from '@/shared'
import { IGetChatHistoryPayload, IGetMessagePayload } from '../model/chat-message-list.interfaces'

export class ChatMessageListApi {
  static async getChatHistory(payload: IGetChatHistoryPayload): Promise<AxiosResponse<IChatMessage[]>> {
    return Api.instance.post<IChatMessage[]>(`/waInstance{idInstance}/getChatHistory/{apiTokenInstance}`, payload)
  }

  static async getMessage(payload: IGetMessagePayload): Promise<AxiosResponse<IChatMessage>> {
    return Api.instance.post<IChatMessage>(`/waInstance{idInstance}/getMessage/{apiTokenInstance}`, payload)
  }
}
