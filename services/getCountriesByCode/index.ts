import HttpClient from '../../shared/HttpClient'
import { IResponseCountriesByCode } from '../../shared/interfaces'

/**
 * @function getCountriesByCode
 * @returns {Promise<IResponseCountriesByCode[]>} an IResponsCountries object response with an array as Data
 * @description get a list of countries name by code
 */
export const getCountriesByCode = async (codes: string[]): Promise<IResponseCountriesByCode[]> => {
  return HttpClient.getInstance().invoke(
    `/v3.1/alpha?codes=${codes.join(',')}&fields=name`,
    'GET',
    'getCountriesByCode()'
  ).then((response) => {
    return response.data
  }).catch(() => {
    return []
  })
}