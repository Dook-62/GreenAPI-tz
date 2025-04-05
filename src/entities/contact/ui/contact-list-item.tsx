import { CSSProperties, FC } from 'react'
import { Flex, Typography } from 'antd'
import { UiListItem } from '@/shared'
import { IContact } from '@/entities/contact'

const { Title, Text } = Typography

interface IProps {
  contact: IContact
}

const STYLES = {
  text: { maxWidth: 264, fontSize: 12 },
} as const satisfies Record<string, CSSProperties>

export const ContactListItem: FC<IProps> = ({ contact }) => {
  const displayName = contact.name || contact.phone

  return (
    <UiListItem name={displayName}>
      <Flex vertical gap={4} align="flex-start">
        <Title level={5}>{displayName}</Title>
        <Text style={STYLES.text} ellipsis>
          {contact.status}
        </Text>
      </Flex>
    </UiListItem>
  )
}
