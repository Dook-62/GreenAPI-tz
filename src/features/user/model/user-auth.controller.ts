import { IUserAccessData, UserApi, userStore } from '@/entities/user'
import { userAuthStore } from './user-auth.store'
import { Api, delay } from '@/shared'

export class UserAuthController {
  static setupAxios(accessData: IUserAccessData): void {
    Api.setup(accessData.idInstance, accessData.apiTokenInstance)
  }

  static setupLocalStorage(accessData: IUserAccessData): void {
    localStorage.setItem('accessData', JSON.stringify(accessData))
  }

  static async authUser(accessData: IUserAccessData): Promise<void> {
    try {
      userAuthStore.setIsLoading(true)
      userAuthStore.setIsError(false)
      userStore.setAccessData(accessData)
      const waSettings = await UserApi.getWaSettings()
      userStore.setWaSettings(waSettings.data)
    } catch {
      userAuthStore.setIsError(true)
    } finally {
      userAuthStore.setIsLoading(false)
    }
  }

  static async restoreUser(): Promise<void> {
    const accessData = localStorage.getItem('accessData')
    if (accessData) {
      UserAuthController.setupAxios(JSON.parse(accessData))
      await UserAuthController.authUser(JSON.parse(accessData))
    }
    // TODO искусственная задержка чтобы показать спиннер
    await delay(1000)
  }
}
