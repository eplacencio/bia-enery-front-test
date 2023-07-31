import { UseQueryResult, useQuery } from 'react-query'
import { getAllCountries } from '../../services'
import { IResponseCountries } from '../../shared/interfaces'

/**
 * To get a list of all countries
 * @param fields string[]
 * @returns IResponseCountries[]
 */
export const useCountries = (fields: string[]) : UseQueryResult<IResponseCountries[]> => {
  return useQuery(`Countries`, () => {
    return getAllCountries(fields)
  }, {
    retry: 3,
    retryDelay: 5000
  })
}