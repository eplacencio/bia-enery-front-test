import { act, fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { BackButton, BackButtonProps } from '.'

const mockClick = jest.fn()

const defaultProps: BackButtonProps = {
  onClick: mockClick
}

describe('<BackButton {...props}/>', () => {

  const component = (props?: BackButtonProps, width = 1440) => {
    return render(
      <ResponsiveContext.Provider value={{ width }} >
        <BackButton {...props}/>
      </ResponsiveContext.Provider>
    )
  }

  const commonChecks = (renderComponent: typeof component = component) => {
    test('should basic render', () => {
      // arrage
      renderComponent()
      const button = screen.getByRole('button', { name: /back/i })
      // assert
      expect(button).toBeDefined()
    })

    test('should call a function inside the button', () => {
      // arrage
      renderComponent()
      const button = screen.getByRole('button', { name: /back/i })

      // act
      act(() => {
        fireEvent.click(button)
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