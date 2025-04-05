import { CSSProperties, FC } from 'react'
import { Avatar } from 'antd'

interface IProps {
  name: string
}

const AVATAR_STYLE = {
  flexShrink: 0,
} as const satisfies CSSProperties

export const UiAvatar: FC<IProps> = ({ name }) => {
  return (
    <Avatar size={42} style={AVATAR_STYLE}>
      {name.charAt(0).toUpperCase()}
    </Avatar>
  )
}
