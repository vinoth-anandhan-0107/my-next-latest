import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'
import '../../../tests/setup'

describe('Header Component', () => {
  test('renders header element', () => {
    render(<Header />)
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })
})
