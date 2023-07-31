import { useRouter } from 'next/router'
import { BackButton } from './BackButton'
import { IResponseCountries } from 'shared/interfaces'
import { CountryData } from './CountryData'

export interface DetailProps {
  countries: IResponseCountries[]
}

export const Detail = ({countries}: DetailProps) => {
  const router = useRouter()
  return (
    <div className='flex flex-col'>
      <section className='flex my-8'>
        <BackButton onClick={() => router.push('/')}/>
      </section>
      <CountryData countries={countries}/>
    </div>
  )
}