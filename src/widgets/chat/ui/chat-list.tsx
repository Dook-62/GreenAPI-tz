import { CSSProperties, FC, useEffect } from 'react'
import { Flex, List, Typography } from 'antd'
import { ChatListItem, useChatStore } from '@/entities/chat'
import { ChatMessageReceiveController, ChatSearch, ChatSelect } from '@/features/chat'
import { UiScrollableContainer } from '@/shared'
import { observer } from 'mobx-react-lite'
import { useChatListStore } from '../model/chat-list.store'
import { ChatListController } from '../model/chat-list.controller'
import { ContactDrawerShow } from '@/features/contact'
import { ChatMessageListController } from '@/widgets/chat/model/chat-message-list.controller.ts'

const FLEX_STYLE = {
  padding: '16px 16px 0',
} as const satisfies CSSProperties

export const ChatList: FC = observer(() => {
  const chatStore = useChatStore()
  const chatListStore = useChatListStore()

  useEffect(() => {
    void ChatListController.getChatList()
    void ChatMessageReceiveController.startReceiveMessage()
    ChatMessageReceiveController.addHandler(ChatListController.updateChatListAfterReceive)
    return () => {
      ChatMessageReceiveController.stopReceiveMessage()
    }
  }, [])

  useEffect(() => {
    ChatMessageReceiveController.removeHandler(ChatMessageListController.updateMessageListAfterReceive)
    if (!chatStore.selectedChat?.id) return
    ChatMessageReceiveController.addHandler(ChatMessageListController.updateMessageListAfterReceive)
  }, [chatStore.selectedChat?.id])

  return (
    <Flex vertical gap={16} style={FLEX_STYLE}>
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="flex-start">
          <Typography.Title level={3}>Чаты</Typography.Title>
          <ContactDrawerShow />
        </Flex>
        <ChatSearch />
      </Flex>
      <UiScrollableContainer offset={122}>
        <List
          dataSource={chatListStore.chatList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <ChatSelect chat={item}>
                <ChatListItem key={item.id} chat={item} />
              </ChatSelect>
            </List.Item>
          )}
        />
      </UiScrollableContainer>
    </Flex>
  )
})
