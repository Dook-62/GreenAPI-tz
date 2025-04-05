import { FC, useEffect } from 'react'
import { notification } from 'antd'
import { observer } from 'mobx-react-lite'
import { useUserAuthStore } from '@/features/user'

export const UserAuthNotification: FC = observer(() => {
  const [api, contextHolder] = notification.useNotification()
  const authStore = useUserAuthStore()

  useEffect(() => {
    if (authStore.isError) {
      api.error({
        message: 'Error',
        description: 'Ошибка авторизации',
        placement: 'bottomRight',
        duration: 2,
      })
    }
  }, [authStore.isError, api])

  return contextHolder
})
