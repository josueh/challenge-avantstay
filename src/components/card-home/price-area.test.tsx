import { render, screen } from '~/lib/test-utils'
import { PriceArea } from './price-area'

describe(PriceArea, () => {
  it('should render prices in `en-US` format', () => {
    const lowSeason = { minPrice: 255, maxPrice: 1000 }
    const highSeason = { minPrice: 0, maxPrice: 0 }
    render(<PriceArea seasonPricing={{ lowSeason, highSeason }} />)
    expect(screen.getByText(/\$255/)).toBeInTheDocument()
    expect(screen.getByText(/\$1,000/)).toBeInTheDocument()
  })
})
