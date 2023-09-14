import { render, screen } from '~/lib/test-utils'
import { MainTitle } from './main-title'

describe(MainTitle, () => {
  it('renders `Loading homes` message', () => {
    render(<MainTitle loading />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(screen.getByText(/homes/i)).toBeInTheDocument()
  })

  it('renders `32` when total is defined', () => {
    render(<MainTitle total={32} />)
    expect(screen.getByText(/32/i)).toBeInTheDocument()
  })

  it('renders `0` when total is empty', () => {
    render(<MainTitle loading={false} total={0} />)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
  })
  it('renders `home` in singular when total is just one', () => {
    render(<MainTitle loading={false} total={1} />)
    expect(screen.queryByText(/homes/i)).not.toBeInTheDocument()
  })
})
