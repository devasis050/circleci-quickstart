import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log('------running test------')
  render(<App />);
  const linkElement = screen.getByText('Cant find you');
  expect(linkElement).toBeInTheDocument();
});
