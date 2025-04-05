import { makeAutoObservable } from 'mobx'

export class UserAuthStore {
  private _isLoading: boolean = false
  private _isError: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  get isLoading(): boolean {
    return this._isLoading
  }

  get isError(): boolean {
    return this._isError
  }

  setIsLoading(isLoading: boolean): void {
    this._isLoading = isLoading
  }

  setIsError(isError: boolean): void {
    this._isError = isError
  }
}

export const userAuthStore = new UserAuthStore()

export type StoreKey = 'isLoading' | 'isError'

export const useUserAuthStore = (): Pick<UserAuthStore, StoreKey> => {
  return {
    isLoading: userAuthStore.isLoading,
    isError: userAuthStore.isError,
  }
}
