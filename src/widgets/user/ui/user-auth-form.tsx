import { CSSProperties, FC } from 'react'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { IUserAccessData } from '@/entities/user'
import { UserAuthController, useUserAuthStore } from '@/features/user'
import { observer } from 'mobx-react-lite'

const STYLES = {
  form: { maxWidth: 420, width: '100%', padding: '48px 24px', backgroundColor: '#fff', borderRadius: 16 },
  button: { width: '100%' },
} as const satisfies Record<string, CSSProperties>

export const UserAuthForm: FC = observer(() => {
  const authStore = useUserAuthStore()
  const [form] = Form.useForm<IUserAccessData>()

  const handleFinish = async (data: IUserAccessData): Promise<void> => {
    UserAuthController.setupAxios(data)
    await UserAuthController.authUser(data)
    UserAuthController.setupLocalStorage(data)
  }

  return (
    <Form form={form} layout="vertical" size="large" style={STYLES.form} onFinish={handleFinish}>
      <Flex vertical gap={24}>
        <Flex justify="center">
          <Typography.Title level={2}>Авторизация</Typography.Title>
        </Flex>
        <Flex vertical gap={8}>
          <Form.Item label="IdInstance" name="idInstance" rules={[{ required: true, message: 'Введите IdInstance' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="ApiTokenInstance"
            name="apiTokenInstance"
            rules={[{ required: true, message: 'Введите ApiTokenInstance' }]}
          >
            <Input />
          </Form.Item>
        </Flex>
        <Flex justify="flex-end">
          <Button type="primary" htmlType="submit" style={STYLES.button} loading={authStore.isLoading}>
            Авторзоваться
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
})
