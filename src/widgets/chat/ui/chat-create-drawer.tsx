import { CSSProperties, FC, ReactNode } from 'react'
import { Button, Drawer, Flex, Typography } from 'antd'
import { observer } from 'mobx-react-lite'
import { ChatCreateController, useChatCreateStore } from '@/features/chat'
import { ArrowLeftOutlined } from '@ant-design/icons'

interface IProps {
  contacts?: ReactNode
}

const STYLES = {
  wrapper: { boxShadow: 'none' },
  header: { display: 'none' },
  body: { padding: 0 },
  flex: { padding: '16px 16px 0' },
} as const satisfies Record<string, CSSProperties>

export const ChatCreateDrawer: FC<IProps> = observer(({ contacts }) => {
  const { isDrawerOpen } = useChatCreateStore()

  const handleClose = () => {
    ChatCreateController.closeDrawer()
  }

  return (
    <Drawer open={isDrawerOpen} placement="left" getContainer={false} mask={false} styles={STYLES}>
      <Flex vertical gap={16}>
        <Flex align="center" gap={16} style={STYLES.flex}>
          <Button onClick={handleClose}>
            <ArrowLeftOutlined />
          </Button>
          <Typography.Title level={5}>Новый чат</Typography.Title>
        </Flex>
        {contacts}
      </Flex>
    </Drawer>
  )
})
