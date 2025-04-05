export interface IUserAccessData {
  idInstance: string
  apiTokenInstance: string
}

export interface IWaSettings {
  avatar: string
  phone: string
  stateInstance: 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting' | 'yellowCard'
  deviceId: string
}
