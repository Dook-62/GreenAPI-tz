import { CSSProperties, FC, PropsWithChildren } from 'react'
import { Flex } from 'antd'
import { UiAvatar } from './ui-avatar'

interface IProps {
  name: string
}

const STYLES = {
  container: { width: '100%', height: 42 },
  flex: { width: '100%', height: '100%' },
} as const satisfies Record<string, CSSProperties>

export const UiListItem: FC<PropsWithChildren<IProps>> = ({ children, name }) => {
  return (
    <Flex style={STYLES.container} gap={8} align="center">
      <UiAvatar name={name} />
      <Flex vertical gap={2} style={STYLES.flex}>
        {children}
      </Flex>
    </Flex>
  )
}
