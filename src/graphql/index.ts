import * as homes from './homes'
import * as regions from './regions'
export type { Home, HomePricing, Region } from './types'

export const graphqlOperations = {
  ...homes,
  ...regions,
}
