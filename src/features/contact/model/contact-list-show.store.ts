import { makeAutoObservable } from 'mobx'

class ContactListShowStore {
  private _isDrawerOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  get isDrawerOpen(): boolean {
    return this._isDrawerOpen
  }

  setIsDrawerOpen(isDrawerOpen: boolean): void {
    this._isDrawerOpen = isDrawerOpen
  }
}

export const contactListShowStore = new ContactListShowStore()

type StoreKey = 'isDrawerOpen'

export const useContactListShowStore = (): Pick<ContactListShowStore, StoreKey> => {
  return {
    isDrawerOpen: contactListShowStore.isDrawerOpen,
  }
}
