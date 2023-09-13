'use client'
import { AppPageHomes } from '~/components/app-page-homes'

type PageProps = {
  params: {
    regionName: string
  }
}

export default function HomesByRegionName({ params: { regionName } }: PageProps) {
  return <AppPageHomes regionName={decodeURI(regionName)} />
}
