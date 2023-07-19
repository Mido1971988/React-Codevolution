import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

test('renders learn react link', () => {
  render(<Greet />)
  // const textElement = screen.getByText(/hello/i);
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})
