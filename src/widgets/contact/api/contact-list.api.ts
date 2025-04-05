import { IContact } from '@/entities/contact'
import { nanoid } from 'nanoid'

// TODO api для получения списка моковых контактов
export class ContactListApi {
  static async getContactListByNumber(filter: string): Promise<IContact[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: nanoid(),
            name: filter,
            phone: filter,
          },
        ])
      }, 200)
    })
  }

  static async getContactList(): Promise<IContact[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([])
      }, 200)
    })
  }
}
