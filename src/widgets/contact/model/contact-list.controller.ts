import { ContactListApi } from '../api/contact-list.api'
import { contactListStore } from '@/widgets/contact/model/contact-list.store.ts'

export class ContactListController {
  static async updateContactListByFilter(filter = ''): Promise<void> {
    contactListStore.setIsLoading(true)
    const contactList = await ContactListApi.getContactListByNumber(filter)
    contactListStore.setContactList(contactList)
    contactListStore.setIsLoading(false)
  }

  static async updateContactList(): Promise<void> {
    contactListStore.setIsLoading(true)
    const contactList = await ContactListApi.getContactList()
    contactListStore.setContactList(contactList)
    contactListStore.setIsLoading(false)
  }
}
