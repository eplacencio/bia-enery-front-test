import HttpClient from '../../shared/HttpClient'
import { IResponseCountries } from '../../shared/interfaces'

/**
 * @function getCountriesByRegion
 * @returns {Promise<IResponseCountries>} an IResponsCountries object response with an array as Data
 * @description get a list countries by region
 */

export const getCountriesByRegion = async (region: string): Promise<IResponseCountries[]> => {
  return HttpClient.getInstance().invoke(
    `/v3.1/region/${region}`,
    'GET',
    'getCountriesByRegion()'
  ).then((response) => {
    return response.data
  })
}