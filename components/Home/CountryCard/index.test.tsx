import { act, fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { CountryCard, CountryCardProps } from '.'
import { countries } from '../../../__mocks__'

const mockClick = jest.fn()

const defaultProps: CountryCardProps = {
  countriesList: countries,
  handleRedirect: mockClick
}

describe('<CountryCard {...props}/>', () => {

  const component = (props?: CountryCardProps, width = 1440) => {
    return render(
      <ResponsiveContext.Provider value={{ width }} >
        <CountryCard {...props}/>
      </ResponsiveContext.Provider>
    )
  }

  const commonChecks = (renderComponent: typeof component = component) => {
    test('should basic render', () => {
      // arrage
      renderComponent()
      // assert
      expect(screen.getByText(countries[0].name.common)).toBeDefined()
      expect(screen.getByText(countries[0].population.toLocaleString('en-US'))).toBeDefined()
      expect(screen.getByText(countries[0].capital[0])).toBeDefined()
    })

    test('should render flag', () => {
      // arrage
      renderComponent()
      const img = document.querySelector('img') as HTMLImageElement

      // assert
      expect(img.src).toContain(countries[0].flags.svg)
    })

    test('should call redirect when click on article', () => {
      // arrage
      const { container } = renderComponent()
      const click = container.querySelectorAll('article')[0]

      // act
      act(() => {
        fireEvent.click(click)
      })

      // assert
      expect(mockClick).toBeCalled()
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