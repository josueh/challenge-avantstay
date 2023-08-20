import Home from './page'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders `AvantStay`', () => {
    render(<Home />)
    expect(screen.queryByText(/avantstay/i)).toBeInTheDocument()
  })
})
