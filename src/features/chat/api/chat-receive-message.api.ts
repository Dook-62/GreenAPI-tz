import { AxiosResponse } from 'axios'
import { Api } from '@/shared'
import { IReceivedMessage } from '../model/chat-message-receive.interfaces'

export class ChatReceiveMessageApi {
  static receiveIncomingNotifications(): Promise<AxiosResponse<IReceivedMessage | null>> {
    return Api.instance.get<IReceivedMessage | null>(`/waInstance{idInstance}/receiveNotification/{apiTokenInstance}`)
  }

  static deleteNotification(receiptId: string): Promise<void> {
    return Api.instance.delete(`/waInstance{idInstance}/deleteNotification/{apiTokenInstance}/${receiptId}`)
  }
}
