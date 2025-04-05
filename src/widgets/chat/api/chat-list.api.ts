import { Api } from '@/shared'
import { AxiosResponse } from 'axios'
import { IChatMessage } from '@/entities/chat'

export class ChatListApi {
  static async getLastIncomingChatMessages(minutes?: number): Promise<AxiosResponse<IChatMessage[]>> {
    return Api.instance.get<IChatMessage[]>(
      `/waInstance{idInstance}/lastIncomingMessages/{apiTokenInstance}?minutes=12000`,
      {
        params: { minutes },
      },
    )
  }

  static async getLastOutgoingChatMessages(): Promise<AxiosResponse<IChatMessage[]>> {
    return Api.instance.get<IChatMessage[]>(
      `/waInstance{idInstance}/lastOutgoingMessages/{apiTokenInstance}?minutes=12000`,
    )
  }
}
