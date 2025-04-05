export interface IChat {
  id: string
  timestamp: number
  contact?: IChatMessageContact
  lastMessage?: string
}

export interface IChatMessage {
  type: 'incoming' | 'outgoing'
  idMessage: string
  timestamp: number
  typeMessage: string
  chatId: string
  senderId: string
  senderName?: string
  senderContactName?: string
  isForwarded?: boolean
  forwardingScore?: number
  textMessage?: string
  downloadUrl?: string
  caption?: string
  fileName?: string
  jpegThumbnail?: string
  mimeType?: string
  isAnimated?: boolean
  chatState?: string
  location?: ILocation
  contact?: IChatMessageContact
  extendedTextMessage?: IExtendedTextMessage
  extendedTextMessageData?: IExtendedTextMessageData
  pollMessageData?: IPollMessageData
  quotedMessage?: IQuotedMessage
}

export interface ILocation {
  nameLocation: string
  address: string
  latitude: number
  longitude: number
  jpegThumbnail?: string
  isForwarded?: boolean
  forwardingScore?: number
}

export interface IChatMessageContact {
  displayName: string
  vcard: string
  isForwarded?: boolean
  forwardingScore?: number
}

export interface IExtendedTextMessage {
  text: string
  description?: string
  title?: string
  previewType?: string
  jpegThumbnail?: string
  forwardingScore?: number
  isForwarded?: boolean
  mediaType?: string
  sourceId?: string
  sourceType?: string
  sourceUrl?: string
  thumbnailUrl?: string
  stanzaId?: string
  participant?: string
}

export interface IExtendedTextMessageData {
  text: string
}

export interface IPollMessageData {
  stanzaId?: string
  name: string
  options?: IPollOption[]
  votes?: IPollVote[]
  multipleAnswers?: boolean
}

export interface IPollOption {
  optionName: string
}

export interface IPollVote {
  optionName: string
  optionVoters: string[]
}

export interface IQuotedMessage {
  stanzaId: string
  participant: string
  typeMessage: string
}
