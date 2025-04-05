import { CSSProperties, FC, useEffect } from 'react'
import { Flex, List } from 'antd'
import { ChatMessage, useChatStore } from '@/entities/chat'
import { ChatSendMessage } from '@/features/chat'
import { UiScrollableContainer } from '@/shared'
import { useChatMessageListStore } from '../model/chat-message-list.store'
import { observer } from 'mobx-react-lite'
import { ChatMessageListController } from '@/widgets/chat/model/chat-message-list.controller.ts'
import { ChatListController } from '@/widgets/chat/model/chat-list.controller.ts'

const STYLES = {
  container: { height: '100%', position: 'relative' },
  list: { padding: '80px 16px', flexDirection: 'column-reverse' },
  sender: { position: 'absolute', bottom: 0, width: '100%' },
  item: { border: 'none', padding: 0 },
} as const satisfies Record<string, CSSProperties>

const JUSTIFY_CONTENT = {
  incoming: { justifyContent: 'flex-start' },
  outgoing: { justifyContent: 'flex-end' },
} as const satisfies Record<string, CSSProperties>

export const ChatMessageList: FC = observer(() => {
  const chatStore = useChatStore()
  const chatMessageListStore = useChatMessageListStore()

  useEffect(() => {
    if (!chatStore.selectedChat?.id) return
    void ChatMessageListController.getMessageList(chatStore.selectedChat.id)
  }, [chatStore.selectedChat?.id])

  const onAfterSend = async (idMessage?: string, lastMessage?: string) => {
    if (!chatStore.selectedChat || !idMessage) return
    await ChatMessageListController.updateMessageList(idMessage, chatStore.selectedChat.id, lastMessage)
    await ChatListController.updateChatList({
      ...chatStore.selectedChat,
      lastMessage,
      timestamp: Math.floor(Date.now() / 1000),
    })
  }

  if (!chatStore.selectedChat) return null

  return (
    <Flex vertical style={STYLES.container}>
      <UiScrollableContainer offset={0} style={STYLES.list}>
        <List
          dataSource={chatMessageListStore.messageList}
          renderItem={(item) => (
            <List.Item key={item.idMessage} style={{ ...STYLES.item, ...JUSTIFY_CONTENT[item.type] }}>
              <ChatMessage message={item} />
            </List.Item>
          )}
        />
      </UiScrollableContainer>
      <Flex style={STYLES.sender}>
        <ChatSendMessage chatId={chatStore.selectedChat.id} afterSend={onAfterSend} />
      </Flex>
    </Flex>
  )
})
