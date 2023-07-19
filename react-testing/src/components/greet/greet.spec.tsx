import { render, screen } from '@testing-library/react'
import { Greet2 } from './greet2'

it('Greet2 render', () => {
  render(<Greet2 />)
  const textElement = screen.getByText(/Hello/)
  expect(textElement).toBeInTheDocument()
})

test('Greet2 with name', () => {
  render(<Greet2 name="Soliman" />)
  const textElement = screen.getByText('Hello Soliman')
  expect(textElement).toBeInTheDocument()
})
