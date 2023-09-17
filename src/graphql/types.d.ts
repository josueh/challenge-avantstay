export type Region = {
  id: string
  name: string
  stateName: string
  stateCode: string
}

type PriceRange = {
  minPrice: number
  maxPrice: number
}

export type Home = {
  id: string
  title: string
  regionName: string
  cityName: string
  stateCode: string
  stateName: string
  photos: Array<{ listOrder: number; url: string }>
  seasonPricing: {
    highSeason: PriceRange
    lowSeason: PriceRange
  }
  roomsCount: number
  bathroomsCount: number
  hasPool: boolean
  maxOccupancy: number
}

export type HomePricing = {
  homeId: string
  numberOfNights: number
  total: number
}
