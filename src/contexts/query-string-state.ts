'use client'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

type QueryStringParams = {
  query?: string
  startDate?: string
  endDate?: string
}

const EMPTY_STATE: QueryStringParams = {
  query: undefined,
  startDate: undefined,
  endDate: undefined,
}

export const useQueryStringState = ({ initialSearchParams }: { initialSearchParams: string }) => {
  const router = useRouter()
  const queryString: QueryStringParams = parseUrlToState(initialSearchParams)

  const clearQueryStrings = useCallback(() => {
    router.push(``, { scroll: false })
  }, [router])

  const addQueryString = useCallback(
    (key: keyof QueryStringParams, value?: string) => {
      queryString[key] = value
      const params = new URLSearchParams()
      Object.entries(queryString).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value)
        }
      })
      router.push(`?` + params, { scroll: false })
    },
    [router, queryString]
  )

  const toString = useCallback(() => {
    const params = new URLSearchParams()
    Object.entries(queryString).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value)
      }
    })
    return `?` + params
  }, [queryString])

  return { data: queryString, clearQueryStrings, addQueryString, toString }
}

function parseUrlToState(searchUrl: string) {
  const data: QueryStringParams = { ...EMPTY_STATE }
  const params = new URLSearchParams(searchUrl)
  const isValidKey = (key: string): key is keyof QueryStringParams => {
    return key in data
  }
  for (const [key, value] of params as any) {
    if (isValidKey(key) && value) {
      data[key] = value
    }
  }
  return data
}
