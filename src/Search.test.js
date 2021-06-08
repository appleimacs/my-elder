import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('calls onClick prop when clicked', () => {
  const onClicked = jest.fn()
  render(<Search onClicked={onClicked} />)
  fireEvent.click(screen.getByText(/Search/i))
  expect(onClicked).toHaveBeenCalledTimes(1)
})

test('calls onKeyPress', () => {
  const onKeyPress = jest.fn((e)=>{return})
  render(<Search onKeyPress={onKeyPress} />);
  fireEvent.keyPress(document.getElementById("search"), { key: 'Enter', charCode: '13' })
  expect(onKeyPress).toHaveBeenCalledTimes(1)
})

test('calls reset prop when clicked', () => {
  const reset = jest.fn()
  render(<Search reset={reset} />)
  fireEvent.click(document.getElementById("reset"))
  expect(reset).toHaveBeenCalledTimes(1)
})
