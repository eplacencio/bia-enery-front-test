import { ChangeEvent, useState } from 'react'
import { getCountriesByRegion } from '../../services'
import { IResponseCountries } from '../../shared/interfaces'
import { getRegions } from '../../shared/helpers'

/**
 * Manage data to filter and search countries
 * @param allCountries IResponseCountries[]
 * @returns allRegions
    countryName
    countriesList
    regionSelected
    handleClearSearch
    handleSearchByName
    handleSelectRegion
 */
export const useManageCountries = (allCountries: IResponseCountries[]) => {
  const [countriesList, setCountriesList] = useState(allCountries)
  const allRegions = getRegions(allCountries)

  const [countryName, setCountryName] = useState('')
  const [regionSelected, setRegionSelected] = useState('')

  const handleSearchByName = async (value: string) => {
    setRegionSelected('')
    setCountryName(value)
    const toFind = value?.toLocaleLowerCase()

    const result = allCountries?.filter(({ name }) =>
      name?.common.toLowerCase().startsWith(toFind)
    )

    setCountriesList(result)
  }

  const handleClearSearch = () => {
    setCountriesList(allCountries)
    setCountryName('')
  }

  const handleSelectRegion = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCountryName('')
    setRegionSelected(event?.target?.value)
    const countriesByRegion = await getCountriesByRegion(event?.target?.value)
    setCountriesList(countriesByRegion)
  }

  return {
    allRegions,
    countryName,
    countriesList,
    regionSelected,
    handleClearSearch,
    handleSearchByName,
    handleSelectRegion
  }
}
