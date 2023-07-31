import { useCountries } from '../hooks'
import { IResponseCountries } from '../shared/interfaces'
import { Home } from '../components/Home'

export default function Body() {
  const { data, isLoading } = useCountries([
    'name', 'flags', 'population', 'region', 'capital', 'area'
  ]);

  const allCountries = data as IResponseCountries[]

  if(isLoading) {
    return <div className='container mx-auto text-text my-8'>Loading</div>
  }

  return (
    <Home allCountries={allCountries}/>
  )
}
