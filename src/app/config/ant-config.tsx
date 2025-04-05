import { FC, PropsWithChildren } from 'react'
import { ConfigProvider } from 'antd'

export const AntConfig: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: '#fff',
            headerBg: '#fff',
          },
          Typography: {
            titleMarginBottom: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
