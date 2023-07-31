import HttpClient from '../../shared/HttpClient'
import { IResponseCountries } from '../../shared/interfaces'

/**
 * @function getAllCountries
 * @returns {Promise<IResponseCountries[]>} an IResponsCountries object response with an array as Data
 * @description get a list of all countries
 */
export const getAllCountries = async (fields = ['name']): Promise<IResponseCountries[]> => {
  return HttpClient.getInstance().invoke(
    `/v3.1/all?fields=${fields.join(',')}`,
    'GET',
    'getAllCountries()'
  ).then((response) => {
    return response.data
  }).catch(() => {
    return []
  })
}