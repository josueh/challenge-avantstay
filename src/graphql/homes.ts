import { gql } from '@apollo/client'

export const GET_HOMES_PRICING = gql`
  query getHomesPricing($ids: [UUID]!, $period: BookingPeriod!) {
    homesPricing(ids: $ids, period: $period) {
      homeId
      numberOfNights
      total
    }
  }
`

export const GET_HOMES = gql`
  query getHomes(
    $region: UUID
    $period: BookingPeriod
    $guests: Int
    $order: HomesOrder
    $page: Int
    $pageSize: Int
  ) {
    homes(
      region: $region
      period: $period
      guests: $guests
      order: $order
      page: $page
      pageSize: $pageSize
    ) {
      count
      results {
        id
        title
        regionName
        cityName
        stateCode
        stateName
        photos {
          listOrder
          url
        }
        seasonPricing {
          highSeason {
            minPrice
            maxPrice
          }
          lowSeason {
            minPrice
            maxPrice
          }
        }
        roomsCount
        bathroomsCount
        hasPool
        maxOccupancy
      }
    }
  }
`
