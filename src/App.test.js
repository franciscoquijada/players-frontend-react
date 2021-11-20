import { render, screen } from '@testing-library/react'
import App from './App'

test('renders title app', () => {
  render(<App />)
  const linkElement = screen.getByText(/List of Players/i)
  expect(linkElement).toBeInTheDocument();
});


