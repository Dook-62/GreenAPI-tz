import { CSSProperties, FC, PropsWithChildren } from 'react'
import { Button } from 'antd'
import { ChatCreateController } from '../model/chat-create.controller'
import { IChat } from '@/entities/chat'

interface Props {
  chat: IChat
  onSelect?: (id?: string) => void
}

const BUTTON_STYLE = {
  height: 'fit-content',
  width: '100%',
  padding: 8,
} as const satisfies CSSProperties

export const ChatSelect: FC<PropsWithChildren<Props>> = ({ children, chat, onSelect }) => {
  const handleClick = () => {
    ChatCreateController.selectChat(chat)
    onSelect?.()
  }

  return (
    <Button type="text" style={BUTTON_STYLE} onClick={handleClick}>
      {children}
    </Button>
  )
}
