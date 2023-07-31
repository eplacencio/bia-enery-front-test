import { AxiosError } from 'axios'
import HttpError from './HttpError'

const mockError: AxiosError = {
  response: {
    config: {
      headers: null
    },
    data: 'test',
    headers: null,
    status: 400,
    statusText: 'error'
  },
  isAxiosError: false,
  toJSON: jest.fn(),
  name: '',
  message: ''
}

describe('HttpError', () => {
  test('Should basic render', () => {
    const Error = new HttpError(mockError)

    expect(Error.status).toEqual(400)
    expect(Error.data).toEqual('test')
  })
})