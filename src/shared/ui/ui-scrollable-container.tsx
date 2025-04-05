import { CSSProperties, FC, ReactNode } from 'react'
import { Flex } from 'antd'

interface IProps {
  children: ReactNode
  offset?: number
  style?: CSSProperties
}

const LIST_STYLE = {
  overflow: 'scroll',
} as const satisfies CSSProperties

export const UiScrollableContainer: FC<IProps> = ({ children, offset, style }) => {
  return (
    <Flex
      style={{ ...LIST_STYLE, height: `calc(100dvh - ${offset}px)`, ...style }}
      vertical
      className="without-scrollbar"
    >
      {children}
    </Flex>
  )
}
