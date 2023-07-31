import Head from 'next/head'
import { useManageCountries } from '../../hooks'
import { SearchInput } from './SearchInput'
import { Filter } from './Filter'
import { CountryCard } from './CountryCard'
import { IResponseCountries } from '../../shared/interfaces'
import { useRouter } from 'next/router'

export interface HomeProps {
  allCountries: IResponseCountries[]
}

export const Home = ({allCountries}: HomeProps): React.ReactElement => {
  const router = useRouter()

  const {
    allRegions,
    countryName,
    countriesList,
    regionSelected,
    handleClearSearch,
    handleSearchByName,
    handleSelectRegion
  } = useManageCountries(allCountries)

  const handleRedirect = (name: string) => {
    router.push(`/Detail/${name}`)
  }

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Countries</title>
      </Head>
      <section className='flex flex-col lg:flex-row lg:justify-between'>
        <SearchInput
          countryName={countryName}
          handleClearSearch={handleClearSearch}
          handleSearchByName={handleSearchByName}
        />
        <Filter
          regions={allRegions}
          handleSelectRegion={handleSelectRegion}
          regionSelected={regionSelected}
        />
      </section>
      <CountryCard countriesList={countriesList} handleRedirect={handleRedirect}/>
    </div>
  )
}