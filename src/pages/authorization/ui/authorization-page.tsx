import { CSSProperties, FC } from 'react'
import { Layout } from 'antd'
import { UserAuthForm } from '@/widgets/user'
import { UserAuthNotification } from '@/features/user'

const STYLES = {
  layout: { minHeight: '100dvh', height: '100%', padding: 48 },
  content: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
} as const satisfies Record<string, CSSProperties>

export const AuthorizationPage: FC = () => {
  return (
    <Layout style={STYLES.layout}>
      <Layout.Content style={STYLES.content}>
        <UserAuthForm />
        <UserAuthNotification />
      </Layout.Content>
    </Layout>
  )
}
