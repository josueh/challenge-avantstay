'use client'
import { useQuery, useMutation } from '@apollo/client'
import { graphqlOperations } from '~/graphql'

type QueryType = keyof typeof graphqlOperations

export const graphql = {
  useQuery: (query: QueryType, ...args: any[]) => {
    return useQuery(graphqlOperations[query], ...args)
  },
  useMutation: (query: QueryType, ...args: any[]) => {
    return useMutation(graphqlOperations[query], ...args)
  },
}
