import { getCountriesByCode } from '../../services/getCountriesByCode'
import { IResponseCountries } from '../interfaces'

export const getBorders = async (country: IResponseCountries) =>
  await getCountriesByCode(country.borders);
