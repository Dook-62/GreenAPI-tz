import { CSSProperties, FC } from 'react'
import { Flex, Typography } from 'antd'
import { timestampToString, UiListItem } from '@/shared'
import { IChat } from '../model/chat-messages.interfaces'

const { Title, Text } = Typography

interface IProps {
  chat: IChat
}

const STYLES = {
  text: { maxWidth: 264, fontSize: 12, textAlign: 'start', width: '100%' },
  date: { fontSize: 10 },
} as const satisfies Record<string, CSSProperties>

export const ChatListItem: FC<IProps> = ({ chat }) => {
  const chatName = chat.id.substring(0, 11)
  const date = timestampToString(chat.timestamp)

  return (
    <UiListItem name={chatName}>
      <Flex gap={4} align="center" justify="space-between">
        <Title level={5}>{chatName}</Title>
        <Text style={STYLES.date}>{date}</Text>
      </Flex>
      <Text style={STYLES.text} ellipsis>
        {chat.lastMessage}
      </Text>
    </UiListItem>
  )
}
