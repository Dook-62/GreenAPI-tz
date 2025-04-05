import { CSSProperties, FC } from 'react'
import { Layout } from 'antd'
import { ChatMessageListHeader, ChatList, ChatMessageList } from '@/widgets/chat'
import { ContactList } from '@/widgets/contact'

const STYLES = {
  layout: { minHeight: '100dvh', height: '100%' },
  sider: { borderRight: '1px solid #0505050F', position: 'relative' },
  content: { position: 'relative' },
} as const satisfies Record<string, CSSProperties>

export const ChatPage: FC = () => {
  return (
    <Layout style={STYLES.layout} hasSider>
      <Layout.Sider style={STYLES.sider} width={380}>
        <ChatList />
        <ContactList />
      </Layout.Sider>
      <Layout.Content style={STYLES.content}>
        <ChatMessageListHeader />
        <ChatMessageList />
      </Layout.Content>
    </Layout>
  )
}
