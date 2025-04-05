import { CSSProperties, FC } from 'react'
import { Flex, Layout, Typography } from 'antd'
import { UiAvatar } from '@/shared'
import { useChatStore } from '@/entities/chat'
import { observer } from 'mobx-react-lite'

const HEADER_STYLE = {
  borderBottom: '1px solid #0505050F',
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1,
} as const satisfies CSSProperties

export const ChatMessageListHeader: FC = observer(() => {
  const chatStore = useChatStore()

  if (!chatStore.selectedChat) return null

  const displayName = chatStore.selectedChat.id.substring(0, 11)

  return (
    <Layout.Header style={HEADER_STYLE}>
      <Flex align="center" gap={8}>
        <UiAvatar name={displayName} />
        <Typography.Title level={5}>{displayName}</Typography.Title>
      </Flex>
    </Layout.Header>
  )
})
