export interface IReceivedMessage {
  receiptId: number | string
  typeWebhook: 'outgoingAPIMessageReceived' | 'incomingMessageReceived'
  body: {
    typeWebhook: string
    instanceData: {
      idInstance: number
      wid: string
      typeInstance: string
    }
    timestamp: number
    idMessage: string
    senderData: {
      chatId: string
      sender: string
      senderName: string
      senderContactName: string
    }
    messageData: {
      typeMessage: string
      textMessageData: {
        textMessage: string
      }
      extendedTextMessageData: {
        description: string
        forwardingScore: 0
        isForwarded: false
        jpegThumbnail: string
        previewType: string
        text: string
        title: string
      }
    }
  }
}
