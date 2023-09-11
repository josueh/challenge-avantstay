import { render, screen } from '~/lib/test-utils'
import { CardHome } from './card-home'
import type { Home } from '~/graphql'

const emptyHome: Home = {
  id: '',
  title: '',
  regionName: '',
  cityName: '',
  stateCode: '',
  stateName: '',
  photos: [],
  seasonPricing: {
    highSeason: { minPrice: 0, maxPrice: 0 },
    lowSeason: { minPrice: 0, maxPrice: 0 },
  },
  roomsCount: 0,
  bathroomsCount: 0,
  hasPool: false,
  maxOccupancy: 0,
}

describe(CardHome, () => {
  it('renders `title`, `region` and `city` in the card', () => {
    const title = `Oceana`
    const regionName = `Coachella Valley`
    const cityName = `La Quinta`
    render(<CardHome data={{ ...emptyHome, title, regionName, cityName }} />)
    expect(screen.getByText(/Oceana/i)).toBeInTheDocument()
    expect(screen.getByText(/coachella valley • la quinta/i)).toBeInTheDocument()
  })

  it('should only display `city` name when `city` and `region` are identical', () => {
    const regionName = `Malibu`
    const cityName = `Malibu`
    render(<CardHome data={{ ...emptyHome, regionName, cityName }} />)
    expect(screen.getByText(/Malibu/i)).toBeInTheDocument()
    expect(screen.queryByText(/Malibu • Malibu/i)).not.toBeInTheDocument()
  })
})
