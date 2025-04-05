import { ChatReceiveMessageApi } from '@/features/chat/api/chat-receive-message.api.ts'
import { IReceivedMessage } from '@/features/chat/model/chat-message-receive.interfaces.ts'

export class ChatMessageReceiveController {
  private static _intervalId: number | null = null
  private static _handlers: ((data: IReceivedMessage | null) => void)[] = []

  static startReceiveMessage(): void {
    void ChatMessageReceiveController.receiveMessage()
    this._intervalId = setInterval(() => {
      void ChatMessageReceiveController.receiveMessage()
    }, 10000)
  }

  static async receiveMessage(): Promise<void> {
    const response = await ChatReceiveMessageApi.receiveIncomingNotifications()
    if (response.data?.receiptId) {
      await ChatReceiveMessageApi.deleteNotification(response.data.receiptId.toString())
      ChatMessageReceiveController._handlers.forEach((handler) => handler(response.data))
    }
  }

  static stopReceiveMessage(): void {
    this._handlers = []
    if (this._intervalId) {
      clearInterval(this._intervalId)
    }
  }

  static addHandler(handler: (data: IReceivedMessage | null) => void): void {
    this._handlers.push(handler)
  }

  static removeHandler(handler: (data: IReceivedMessage | null) => void): void {
    this._handlers = this._handlers.filter((h) => h !== handler)
  }
}
