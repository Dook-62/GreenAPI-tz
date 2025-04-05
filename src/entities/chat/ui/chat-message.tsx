import { CSSProperties, FC } from 'react'
import { Alert } from 'antd'
import { IChatMessage } from '@/entities/chat'

interface IProps {
  message: IChatMessage
}

const ALERT_STYLES = {
  borderColor: '#0505050F',
  backgroundColor: '#fff',
  maxWidth: '36%',
} as const satisfies CSSProperties

export const ChatMessage: FC<IProps> = ({ message }) => {
  return <Alert style={ALERT_STYLES} message={message.textMessage} />
}
