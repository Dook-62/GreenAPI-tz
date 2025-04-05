import { AxiosResponse } from 'axios'
import { ISendMessage, ISendMessagePayload } from '../model/chat-send-message.interfaces'
import { Api } from '@/shared'

export class ChatSendMessageApi {
  static async sendMessage(payload: ISendMessagePayload): Promise<AxiosResponse<ISendMessage>> {
    return Api.instance.post<ISendMessage>(`/waInstance{idInstance}/sendMessage/{apiTokenInstance}`, payload)
  }
}
