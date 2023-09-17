import { HomePricing } from '~/graphql'
import { graphql } from './graphql'
import { useMemo } from 'react'

type Props = {
  homesIds: string[]
  period?: { checkIn: string; checkOut: string }
}
const EMPTY_OBJECT = {} as const

export const usePricesAPI = ({ homesIds, period }: Props) => {
  const { loading, error, data } = graphql.useQuery('GET_HOMES_PRICING', {
    variables: {
      ids: homesIds,
      period: period,
    },
    skip: homesIds.length === 0 || !period,
  })

  const pricingByHome: Record<string, HomePricing> = useMemo(() => {
    const hash: Record<string, HomePricing> = {}
    if (!loading) {
      data?.homesPricing.forEach((item: HomePricing) => {
        hash[item.homeId] = item
      })
    }
    return Object.keys(hash).length ? hash : EMPTY_OBJECT
  }, [loading, data])

  return { loading, error, data, pricingByHome }
}
