'use client'
import { useSearchParams } from 'next/navigation'
import { AppPageHomes } from '~/components/app-page-homes'
import { QueryStringContextProvider } from '~/contexts'

type PageProps = {
  params: {
    regionName: string
  }
}

export default function HomesByRegionName({ params: { regionName } }: PageProps) {
  const searchParams = useSearchParams().toString()

  return (
    <QueryStringContextProvider initialSearchUrl={searchParams}>
      <AppPageHomes regionName={decodeURI(regionName)} />
    </QueryStringContextProvider>
  )
}
