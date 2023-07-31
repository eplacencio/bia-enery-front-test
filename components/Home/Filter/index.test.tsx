import { act, fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { Filter, FilterProps } from '.'
import { regions } from '../../../__mocks__'

const mockClick = jest.fn()

const defaultProps: FilterProps = {
  regions: regions,
  regionSelected: '',
  handleSelectRegion: mockClick
}

describe('<Filter {...props}/>', () => {

  const component = (props?: FilterProps, width = 1440) => {
    return render(
      <ResponsiveContext.Provider value={{ width }} >
        <Filter {...props}/>
      </ResponsiveContext.Provider>
    )
  }

  const commonChecks = (renderComponent: typeof component = component) => {
    test('should basic render', () => {
      // arrage
      renderComponent()

      // assert
      expect(screen.getByRole('option', { name: regions[0] })).toBeDefined()
    })

    test('should display the correct number of options', () => {
      // arrange
      renderComponent()

      // assert
      expect(screen.getAllByRole('option').length).toBe(7)
    })

    test('should user can change option', () => {
      // arrage
      renderComponent()
      const select = screen.getByRole('combobox')

      // act
      act(() => {
        fireEvent.change(select)
      })

      // assert
      expect(mockClick).toHaveBeenCalled()
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