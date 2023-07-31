import { UseQueryResult, useQuery } from 'react-query'
import { getCountriesByName } from '../../services'
import { IResponseCountries } from '../../shared/interfaces'
import { getBorders } from '../../shared/helpers'

/**
 * To get countries by name
 * @param name string
 * @returns IResponseCountries[] with bodersDetails
 */
export const useCountriesByName = (name: string) : UseQueryResult<IResponseCountries[]> => {
  return useQuery(`CountriesByName`, async () => {
    const countries = await getCountriesByName(name)

    const result = await Promise.all(countries.map(async country => {
      if (country?.borders) {
        const borders = await getBorders(country)
        return Object.assign(country, { borderDetails: borders })
      }

      return country
    }))

    return result
  }, {
    retry: 3,
    retryDelay: 5000
  })
}