import { FC } from 'react'
import { Button, Flex, Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  onSearch?: (value: string) => void
  onClear?: () => void
}

const PHONE_VALIDATOR = {
  pattern: /^(\+?[1-9]\d{1,14})$/,
  message: 'Введите корректный номер телефона',
} as const

export const ContactSearch: FC<IProps> = ({ onSearch, onClear }) => {
  const [form] = Form.useForm()

  const handleFormFinish = ({ phone }: { phone: string }): void => {
    onSearch?.(phone)
  }

  const handleClear = (): void => {
    form.resetFields()
    onClear?.()
  }

  return (
    <Form form={form} onFinish={handleFormFinish}>
      <Flex align="flex-start" gap={12}>
        <Form.Item name="phone" rules={[PHONE_VALIDATOR]} style={{ width: '100%' }}>
          <Input size="large" placeholder="Введите номер телефона" allowClear onClear={handleClear} />
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          <SearchOutlined />
        </Button>
      </Flex>
    </Form>
  )
}
