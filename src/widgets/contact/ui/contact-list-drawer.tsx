import { CSSProperties, FC, PropsWithChildren } from 'react'
import { ContactListShowController, useContactListShowStore } from '@/features/contact'
import { Button, Drawer, Flex, Typography } from 'antd'
import { observer } from 'mobx-react-lite'
import { ContactListController } from '@/widgets/contact/model/contact-list.controller.ts'
import { ArrowLeftOutlined } from '@ant-design/icons'

const STYLES = {
  wrapper: { boxShadow: 'none' },
  header: { display: 'none' },
  body: { padding: 0 },
  flex: { padding: '16px 16px 0' },
  list: { padding: '0 16px' },
} as const satisfies Record<string, CSSProperties>

export const ContactListDrawer: FC<PropsWithChildren> = observer(({ children }) => {
  const { isDrawerOpen } = useContactListShowStore()

  return (
    <Drawer
      open={isDrawerOpen}
      placement="left"
      getContainer={false}
      mask={false}
      styles={STYLES}
      destroyOnClose
      afterOpenChange={ContactListController.updateContactList}
    >
      <Flex vertical gap={16}>
        <Flex align="center" gap={16} style={STYLES.flex}>
          <Button onClick={ContactListShowController.closeDrawer}>
            <ArrowLeftOutlined />
          </Button>
          <Typography.Title level={5}>Новый чат</Typography.Title>
        </Flex>
        <Flex vertical gap={16} style={STYLES.list}>
          {children}
        </Flex>
      </Flex>
    </Drawer>
  )
})
