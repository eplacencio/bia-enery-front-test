import { AxiosError } from 'axios'
import { IError } from './Interfaces'

class HttpError extends Error implements IError {
  constructor(public error: AxiosError) {
    super()
    this.status = error?.response?.status
    this.data = error?.response?.data
  }
  status: number | undefined
  data: unknown
}

export default HttpError
