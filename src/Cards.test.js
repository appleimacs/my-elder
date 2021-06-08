import { render, screen } from '@testing-library/react';
import Cards from './TestCard';

const card = 
{
  imageUrl: "url",
  name: "name",
  type: "type",
  text: "text",
  set: {
    name: "set"
  }
}

test('renders card', () => {
  render(<Cards card={card} />);
  const el = document.getElementById("card");
  expect(el).toBeInTheDocument();
});
