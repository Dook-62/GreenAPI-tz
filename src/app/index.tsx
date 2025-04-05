import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AntConfig } from './config/ant-config'
import { ChatPage } from '@/pages/chat'
import { AuthorizationPage } from '@/pages/authorization'
import { UserAuthGuard } from '@/features/user'
import './styles/reset.scss'

export const App: FC = () => {
  return (
    <AntConfig>
      <BrowserRouter>
        <Routes>
          <Route element={<UserAuthGuard />}>
            <Route path="chat" element={<ChatPage />} />
            <Route path="auth" element={<AuthorizationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AntConfig>
  )
}
