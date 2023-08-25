'use client'
import { useState, useCallback, useEffect } from 'react'

type QueryStringParams = {
  query: string | null
  startDate: string | null
  endDate: string | null
}

const EMPTY_STATE: QueryStringParams = {
  query: null,
  startDate: null,
  endDate: null,
}

export const useQueryStringState = ({ initialSearchUrl }: { initialSearchUrl: string }) => {
  const [queryString, setQueryString] = useState<QueryStringParams>(
    parseUrlToState(initialSearchUrl)
  )

  useEffect(() => {
    syncCurrentUrlWithQuery(queryString)
  }, [queryString])

  const clearQueryStrings = useCallback(() => {
    setQueryString({ ...EMPTY_STATE })
  }, [])

  const addQueryString = useCallback((key: keyof QueryStringParams, value?: string) => {
    setQueryString((prev) => ({ ...prev, [key]: value }))
  }, [])

  return { queryString, clearQueryStrings, addQueryString }
}

function parseUrlToState(searchUrl: string) {
  const data: QueryStringParams = { ...EMPTY_STATE }
  const params = new URLSearchParams(searchUrl)
  const isValidKey = (key: string): key is keyof QueryStringParams => {
    return key in data
  }
  for (const [key, value] of params as any) {
    if (isValidKey(key)) {
      data[key] = value
    }
  }
  return data
}

function syncCurrentUrlWithQuery(queryString: QueryStringParams) {
  const currentUrl = new URL(window.location.href)
  currentUrl.search = ''
  Object.entries(queryString).forEach(([key, value]) => {
    if (value !== null) {
      currentUrl.searchParams.set(key, value)
    }
  })
  window.history.replaceState({}, '', currentUrl.toString())
}
