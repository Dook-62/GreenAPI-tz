import { makeAutoObservable } from 'mobx'
import { IUserAccessData, IWaSettings } from './user.interfaces'

class UserStore {
  private _accessData: IUserAccessData | null = null
  private _waSettings: IWaSettings | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get isAuth(): boolean {
    return !!this._accessData
  }

  get accessData(): IUserAccessData | null {
    return this._accessData
  }

  get IWaSettings(): IWaSettings | null {
    return this._waSettings
  }

  setAccessData(newAccessData: IUserAccessData | null): void {
    this._accessData = newAccessData
  }

  setWaSettings(newWaSettings: IWaSettings | null): void {
    this._waSettings = newWaSettings
  }
}

export const userStore = new UserStore()

type StoreKey = 'accessData' | 'IWaSettings' | 'isAuth'

export const useUserStore = (): Pick<UserStore, StoreKey> => {
  return {
    accessData: userStore.accessData,
    IWaSettings: userStore.IWaSettings,
    isAuth: userStore.isAuth,
  }
}
