import { IResponseCountries } from '../../../shared/interfaces'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

export interface CountryCardProps {
  countriesList: IResponseCountries[];
  handleRedirect: (name: string) => void;
}

export const CountryCard = ({
  countriesList,
  handleRedirect
}: CountryCardProps): React.ReactElement => {
  return (
    <div className='w-full flex flex-col md:flex-wrap md:flex-row md:justify-between'>
      {
        countriesList &&
        countriesList?.length > 0 &&
        countriesList?.map((country) => (
          <article
            key={uuidv4()}
            className='cursor-pointer flex flex-col overflow-hidden bg-element rounded-md my-4 shadow-sm md:w-1/2-1 lg:w-1/4-1'
            onClick={() => handleRedirect(country?.name?.common)}
            id="country"
          >
            <div className='h-48 max-h-48 overflow-hidden flex justify-center'>
              <Image
                className='w-auto h-full'
                alt={country?.name?.common}
                src={country?.flags?.svg}
                width={400}
                height={400}
                loading='eager'
              />
            </div>
            <div className='p-5 text-text'>
              <h2 className='font-extrabold text-sm'>
                {country?.name?.common}
              </h2>
              <p className='text-sm'>
                <span className='font-semibold'>Population: </span>
                {country?.population?.toLocaleString('en-US')}
              </p>
              <p className='text-sm'>
                <span className='font-semibold'>Region: </span>
                {country?.region}
              </p>
              <p className='text-sm'>
                <span className='font-semibold'>Capital: </span>
                {country?.capital?.join(', ')}
              </p>
            </div>
          </article>
        ))
      }
    </div>
  )
}