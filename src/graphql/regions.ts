import { gql } from '@apollo/client'

export const GET_ALL_REGIONS = gql`
  query getAllRegions {
    regions {
      id
      name
      stateName
      stateCode
    }
  }
`
