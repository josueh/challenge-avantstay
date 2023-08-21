import { render, screen } from '~/lib/test-utils'
import Home from './page'

describe(Home, () => {
  it('renders `AvantStay`', () => {
    render(<Home />)
    expect(screen.getByText(/AvantStay/i)).toBeInTheDocument()
  })
})
