import { v4 as uuidv4 } from 'uuid'
import { IResponseCountries } from 'shared/interfaces'
import Image from 'next/image'

export interface CountryDataProps {
  countries: IResponseCountries[];
}

export const CountryData = ({countries}: CountryDataProps): React.ReactElement => {
  return (
    <>
      {
        Array.isArray(countries) &&
        countries?.length > 0 &&
        countries.map((country) => {
           return (
            <article key={uuidv4()} className='flex flex-col lg:flex-row'>
              <div className='h-48 max-h-48 overflow-hidden flex justify-center lg:w-1/2'>
                <Image
                  className='w-auto h-full'
                  alt={country?.name?.common}
                  src={country?.flags?.svg}
                  width={400}
                  height={400}
                  loading='eager'
                />
              </div>
              <div className='flex flex-col'>
                <h2 className='text-text text-2xl font-extrabold my-8 lg:mt-0'>
                  {country?.name?.common}
                </h2>
                <div className='flex flex-col lg:flex-row'>
                  <section className='text-text lg:mr-10'>
                    <p className='mb-4'>
                      <span className='font-semibold mr-1'>
                        Native Name{Object.keys(country?.name?.nativeName).length > 1 && 's'}:
                      </span>
                      { country?.name?.nativeName && Object.keys(country?.name?.nativeName).map(name =>
                          country?.name?.nativeName[name]?.common
                        ).join(', ')
                      }
                    </p>
                    <p className='my-4'>
                      <span className='font-semibold'>Population: </span>
                      {country?.population?.toLocaleString('en-US')}
                    </p>
                    <p className='my-4'>
                      <span className='font-semibold'>Region: </span>
                      {country?.region}
                    </p>
                    <p className='my-4'>
                      <span className='font-semibold'>Sub Region: </span>
                      {country?.subregion}
                    </p>
                    <p className='my-4'>
                      <span className='font-semibold'>Capital: </span>
                      {country?.capital}
                    </p>
                  </section>
                  <section className='text-text mt-8 lg:mt-0'>
                    <p className='my-4 lg:mt-0'>
                      <span className='font-semibold'>Top Level Domain: </span>
                      {country?.tld?.join(', ')}
                    </p>
                    <p className='mb-4'>
                      <span className='font-semibold'>Currencies: </span>
                      { country?.currencies && Object.keys(country?.currencies).map(currency =>
                          country?.currencies[currency]?.name
                        ).join(', ')
                      }
                    </p>
                    <p className='mb-4'>
                      <span className='font-semibold mr-1'>
                        Languages:
                      </span>
                      { country?.languages && Object.keys(country?.languages).map(language =>
                          country?.languages[language]
                        ).join(', ')
                      }
                    </p>
                  </section>
                </div>
                { Array.isArray(country.borderDetails) &&
                  <section className='text-text my-8'>
                    <h3 className='font-semibold text-xl'>
                      Border Countries:
                    </h3>
                    <div className='flex flex-wrap items-center'>
                      {country.borderDetails.map((border) => (
                          <span
                            className='text-center bg-element rounded-md shadow-sm py-2 px-6 m-2'
                            key={uuidv4()}
                          >
                            {border?.name?.common}
                          </span>
                        ))
                      }
                    </div>
                  </section>
                }
              </div>
            </article>
          )
        })
      }
    </>
  )
}