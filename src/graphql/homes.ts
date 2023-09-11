import { gql } from '@apollo/client'

export const GET_HOMES = gql`
  query getHomes($region: UUID, $page: Int, $pageSize: Int) {
    homes(region: $region, page: $page, pageSize: $pageSize) {
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
