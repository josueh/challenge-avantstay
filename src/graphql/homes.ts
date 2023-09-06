import { gql } from '@apollo/client'

export const GET_ALL_HOMES = gql`
  query homes {
    count
    results {
      id
      title
      description
    }
  }
`
