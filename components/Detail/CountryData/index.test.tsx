import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { CountryData, CountryDataProps } from '.'
import { countries } from '../../../__mocks__'

const defaultProps: CountryDataProps = {
  countries: countries
}

describe('<CountryData {...props}/>', () => {

  const component = (props?: CountryDataProps, width = 1440) => {
    return render(
      <ResponsiveContext.Provider value={{ width }} >
        <CountryData {...props}/>
      </ResponsiveContext.Provider>
    )
  }

  const commonChecks = (renderComponent: typeof component = component) => {
    test('should basic render', () => {
      // arrage
      renderComponent()
      // assert
      expect(screen.getAllByText(countries[0].name.common)[0]).toBeDefined()
      expect(screen.getByText(countries[0].population.toLocaleString('en-US'))).toBeDefined()
      expect(screen.getByText(countries[0].subregion)).toBeDefined()
      expect(screen.getByText(countries[0].capital[0])).toBeDefined()
    })

    test('should render flag', () => {
      // arrage
      renderComponent()
      const img = document.querySelector('img') as HTMLImageElement

      // assert
      expect(img.src).toContain(countries[0].flags.svg)
    })

    test('should render country borders', () => {
      // arrage
      renderComponent()

      // assert
      expect(screen.getByText(countries[0].borderDetails[0].name.common)).toBeDefined()
    })
  }

  describe('should render on BigScreen', () => {
    const renderBigScreen: typeof component = () => { return component({...defaultProps}, 1440) }
    commonChecks(renderBigScreen)
  })

  describe('should render on SmallScreen', () => {
    const renderSmallScreen: typeof component = () => { return component({...defaultProps}, 475) }
    commonChecks(renderSmallScreen)
  })
})