import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method
} from 'axios'
import HttpError from '../errors/HttpError'

export interface IHttpClient<T, U> {
  url: string;
  method: Method;
  headers?: T;
  data?: U;
}

export default class HttpClient implements IHttpClient<unknown, unknown> {
  static invoke(arg0: string, arg1: string, arg2: string, headers: any) {
    throw new Error('Method not implemented.');
  }
  url: string = '/'
  method: Method = 'GET'
  headers?: AxiosRequestHeaders
  data?: unknown

  constructor({
    baseURL = 'https://restcountries.com',
    timeout = 0
  }: AxiosRequestConfig = {}) {
    axios.defaults.baseURL = baseURL
    axios.defaults.timeout = timeout
    // Add a response interceptor
    axios.interceptors.response.use((response) => {
      return response
    })
  }

  static singleton: HttpClient
  static getInstance() {
    if (!this.singleton) this.singleton = new HttpClient()
    return this.singleton
  }

  // Generate a method for calling and controlling the request with Axios
  public async invoke(
    url: string,
    method: Method,
    data?: unknown,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> {
    try {
      return await axios({
        method,
        url,
        headers,
        data
      })
    } catch (error) {
      console.log('error', error)
      throw new HttpError(error as AxiosError)
    }
  }
}
