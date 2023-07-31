import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Detail } from '../../components/Detail'
import { useCountriesByName } from '../../hooks'
import { IResponseCountries } from '../../shared/interfaces'
import Head from 'next/head'

export default function CountryDetail() {
  const router = useRouter()
  const countryName = router?.query?.name as string

  const { data, isLoading } = useCountriesByName(countryName)
  const countries = data as IResponseCountries[]

  useEffect(() => {
    if(!router?.query?.name){
      router.push('/')
    }
  }, [router])

  if(isLoading) {
    return <div className='container mx-auto text-text my-8'>Loading</div>
  }

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Countries - Detail</title>
      </Head>
      <Detail countries={countries}/>
    </div>
  )
}