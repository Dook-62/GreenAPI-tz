import { IContact } from '@/entities/contact'
import { makeAutoObservable } from 'mobx'

class ContactListStore {
  private _isLoading: boolean = false
  private _contactList: IContact[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get contactList(): IContact[] {
    return this._contactList
  }

  get isLoading(): boolean {
    return this._isLoading
  }

  setContactList(contactList: IContact[]) {
    this._contactList = contactList
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading
  }
}

export const contactListStore = new ContactListStore()

type StoreKey = 'contactList' | 'isLoading'

export const useContactListStore = (): Pick<ContactListStore, StoreKey> => {
  return {
    contactList: contactListStore.contactList,
    isLoading: contactListStore.isLoading,
  }
}
