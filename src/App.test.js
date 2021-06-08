import { render } from '@testing-library/react';
import App from './App'

test('app renders', () => {
  render(<App />);
  const el = document.getElementById("total");
  expect(el).toBeInTheDocument();

})
