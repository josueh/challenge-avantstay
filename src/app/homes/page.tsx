'use client'
import { useSearchParams } from 'next/navigation'
import { AppPageHomes } from '~/components/app-page-homes'
import { QueryStringContextProvider } from '~/contexts'

export default function Home() {
  const searchParams = useSearchParams().toString()

  return (
    <QueryStringContextProvider initialSearchUrl={searchParams}>
      <AppPageHomes />
    </QueryStringContextProvider>
  )
}
