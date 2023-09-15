import { gql } from '@apollo/client'

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
