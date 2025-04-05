import { Api } from '@/shared'
import { IWaSettings } from '../model/user.interfaces'
import { AxiosResponse } from 'axios'

export class UserApi {
  static async getWaSettings(): Promise<AxiosResponse<IWaSettings>> {
    return Api.instance.get<IWaSettings>(`/waInstance{idInstance}/getWaSettings/{apiTokenInstance}`)
  }
}
