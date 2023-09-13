'use client'
import { createContext, useContext } from 'react'
import { useQueryStringState } from './query-string-state'
import { useSearchParams } from 'next/navigation'

type QueryStringContext = ReturnType<typeof useQueryStringState>

export const QueryStringContext = createContext<QueryStringContext | null>(null)

type Props = {
  children: React.ReactNode
}

export const QueryStringContextProvider = ({ children }: Props) => {
  const searchParams = useSearchParams().toString()
  const value = useQueryStringState({ initialSearchUrl: searchParams })
  return <QueryStringContext.Provider value={value}>{children}</QueryStringContext.Provider>
}

export const useQueryStringContext = () => {
  const context = useContext(QueryStringContext)
  if (!context) {
    throw new Error('useQueryStringContext must be used within a QueryStringContextProvider')
  }
  return context
}
