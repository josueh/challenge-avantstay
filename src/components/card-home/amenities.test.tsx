import { render, screen } from '~/lib/test-utils'
import { Amenities } from './amenities'

describe(Amenities, () => {
  it('should render `pool` when available', () => {
    render(<Amenities hasPool />)
    expect(screen.getByText(/pool/i)).toBeInTheDocument()
  })

  it('should not render `pool` when unavailable', () => {
    render(<Amenities />)
    expect(screen.queryByText(/pool/i)).not.toBeInTheDocument()
  })

  it('should not render `bathrooms` when quantity is zero', () => {
    render(<Amenities bathroomsCount={0} />)
    expect(screen.queryByText(/bathroom/i)).not.toBeInTheDocument()
  })

  it('should render `bathroom` when quantity is 1', () => {
    render(<Amenities bathroomsCount={1} />)
    expect(screen.getByText(/1 bathroom$/i)).toBeInTheDocument()
  })

  it('should render `bathrooms` when quantity is 2 or more', () => {
    render(<Amenities bathroomsCount={2} />)
    expect(screen.getByText(/2 bathrooms/i)).toBeInTheDocument()
    render(<Amenities bathroomsCount={101} />)
    expect(screen.getByText(/101 bathrooms/i)).toBeInTheDocument()
  })

  it('should render `bathrooms` with one decimal when the quantity is fractional', () => {
    render(<Amenities bathroomsCount={4.5} />)
    expect(screen.getByText(/4.5 bathrooms/i)).toBeInTheDocument()
  })
})
