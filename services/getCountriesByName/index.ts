import HttpClient from '../../shared/HttpClient'
import { IResponseCountries } from '../../shared/interfaces'

/**
 * @function getCountriesByName
 * @returns {Promise<IResponseCountries>} an IResponsCountries object response with an array as Data
 * @description get a list of countries by name
 */

export const getCountriesByName = async (name: string): Promise<IResponseCountries[]> => {
  if (!name) return []
  return HttpClient.getInstance().invoke(
    `/v3.1/name/${name}?fullText=true`,
    'GET',
    'getCountriesByName()'
  ).then((response) => {
    return response.data
  })
}