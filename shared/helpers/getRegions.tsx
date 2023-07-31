import { IResponseCountries } from '../interfaces';

/**
 * Function that return all regions sorted
 * @param countriesList IResponseCountries
 * @returns string[]
 */
export const getRegions = (countriesList: IResponseCountries[]) => {
  const result = countriesList?.reduce((acc: string[], current: IResponseCountries) => {
    if (!acc.includes(current?.region)) {
      acc.push(current?.region)
    }

    return acc
  }, []).sort()

  return result
}