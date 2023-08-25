'use client'
import { createContext, useContext } from 'react'
import { useQueryStringState } from './query-string-state'

type QueryStringContext = ReturnType<typeof useQueryStringState>

export const QueryStringContext = createContext<QueryStringContext | null>(null)

type Props = {
  initialSearchUrl: string
  children: React.ReactNode
}

export const QueryStringContextProvider = ({ initialSearchUrl, children }: Props) => {
  const value = useQueryStringState({ initialSearchUrl })
  return <QueryStringContext.Provider value={value}>{children}</QueryStringContext.Provider>
}

export const useQueryStringContext = () => {
  const context = useContext(QueryStringContext)
  if (!context) {
    throw new Error('useQueryStringContext must be used within a QueryStringContextProvider')
  }
  return context
}
