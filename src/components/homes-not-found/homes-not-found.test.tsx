import { render, screen } from '~/lib/test-utils'
import { HomesNotFound } from './homes-not-found'

describe(HomesNotFound, () => {
  it('renders `Oops!` message', () => {
    render(<HomesNotFound />)
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument()
  })

  it('renders `region` name when it is provided', () => {
    render(<HomesNotFound region="California" />)
    const matchedElements = screen.queryAllByText(/california/i)
    expect(matchedElements.length).toBeGreaterThan(0)
  })

  it('renders an image `Satellite` with an infinite animation', () => {
    render(<HomesNotFound />)
    const image = screen.getByAltText(/satellite/i)
    expect(image).toHaveStyleRule('animation', /infinite/g)
  })
})
