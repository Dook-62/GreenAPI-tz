import { FC } from 'react'
import { ContactListItem } from '@/entities/contact'
import { ContactListShowController, ContactSearch } from '@/features/contact'
import { List } from 'antd'
import { UiScrollableContainer } from '@/shared'
import { observer } from 'mobx-react-lite'
import { useContactListStore } from '../model/contact-list.store'
import { ContactListController } from '../model/contact-list.controller'
import { ContactListDrawer } from './contact-list-drawer'
import { ChatSelect } from '@/features/chat'
import { contactToEmptyChat } from '../lib/contact-to-chat'

export const ContactList: FC = observer(() => {
  const contactListStore = useContactListStore()

  return (
    <ContactListDrawer>
      <ContactSearch
        onSearch={ContactListController.updateContactListByFilter}
        onClear={ContactListController.updateContactList}
      />
      <UiScrollableContainer offset={122}>
        <List
          dataSource={contactListStore.contactList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <ChatSelect chat={contactToEmptyChat(item)} onSelect={ContactListShowController.closeDrawer}>
                <ContactListItem contact={item} />
              </ChatSelect>
            </List.Item>
          )}
        />
      </UiScrollableContainer>
    </ContactListDrawer>
  )
})
