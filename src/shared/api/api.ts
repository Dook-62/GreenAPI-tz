import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

export class Api {
  static instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  static setup(idInstance: string, apiTokenInstance: string) {
    this.instance.interceptors.request.use((config) => {
      config.url = config.url?.replace('{idInstance}', idInstance).replace('{apiTokenInstance}', apiTokenInstance)
      return config
    })
  }
}
