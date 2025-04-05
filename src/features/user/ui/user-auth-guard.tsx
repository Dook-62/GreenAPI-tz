import { FC, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/entities/user'
import { UserAuthController } from '@/features/user'
import { Spin } from 'antd'

export const UserAuthGuard: FC = observer(() => {
  const [isRestoring, setIsRestoring] = useState(true)
  const { isAuth } = useUserStore()

  useEffect(() => {
    UserAuthController.restoreUser().finally(() => {
      setIsRestoring(false)
    })
  }, [])

  return (
    <>
      {isAuth ? <Navigate to="/chat" /> : <Navigate to="/auth" />}
      <Spin size="large" spinning={isRestoring} fullscreen tip="Загрузка..." />
      {!isRestoring && <Outlet />}
    </>
  )
})
