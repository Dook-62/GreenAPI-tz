import { contactListShowStore } from './contact-list-show.store'

export class ContactListShowController {
  static openDrawer(): void {
    contactListShowStore.setIsDrawerOpen(true)
  }

  static closeDrawer(): void {
    contactListShowStore.setIsDrawerOpen(false)
  }
}
