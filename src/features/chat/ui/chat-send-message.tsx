import { CSSProperties, FC } from 'react'
import { Button, Flex, Form, Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { ChatSendMessageController } from '../model/chat-send-message.controller'

interface IProps {
  chatId: string
  afterSend?: (idMessage?: string, text?: string) => void
}

interface IFormValues {
  message: string
}

const STYLES = {
  form: { width: '100%', borderTop: '1px solid #0505050F' },
  flex: { padding: 16, width: '100%', backgroundColor: '#fff' },
} as const satisfies Record<string, CSSProperties>

export const ChatSendMessage: FC<IProps> = ({ chatId, afterSend }) => {
  const [form] = Form.useForm<IFormValues>()

  const handleSendMessage = async ({ message }: IFormValues): Promise<void> => {
    const data = await ChatSendMessageController.sendMessage({ chatId, message })
    afterSend?.(data?.idMessage, message)
    form.resetFields()
  }

  return (
    <Form onFinish={handleSendMessage} style={STYLES.form} form={form}>
      <Flex style={STYLES.flex} align="center" gap={16}>
        <Form.Item name="message" noStyle>
          <Input placeholder="Введите сообщение" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <SendOutlined />
        </Button>
      </Flex>
    </Form>
  )
}
