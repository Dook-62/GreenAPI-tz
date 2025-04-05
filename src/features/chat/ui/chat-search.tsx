import { ChangeEventHandler, FC, useState } from 'react'
import { Input } from 'antd'

export const ChatSearch: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setSearchValue(e.target.value)
  }

  // TODO: задисэйблено. Для последующей реализации
  return (
    <Input size="large" placeholder="Поиск" value={searchValue} onChange={handleSearchChange} allowClear disabled />
  )
}
