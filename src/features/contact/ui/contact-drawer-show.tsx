import { FC } from 'react'
import { UserAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { ContactListShowController } from '../model/contact-list-show.controller'

export const ContactDrawerShow: FC = () => {
  const handleClick = () => {
    ContactListShowController.openDrawer()
  }

  return (
    <Button type="primary" onClick={handleClick}>
      <UserAddOutlined />
    </Button>
  )
}
