import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'react-bootstrap/Button';

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Search</Button>)
  fireEvent.click(screen.getByText(/Search/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
