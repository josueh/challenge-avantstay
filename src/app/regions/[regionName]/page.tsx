import { AppHeader } from '~/components/app-header'
import { AppPageHomes } from '~/components/app-page-homes'

type PageProps = {
  params: {
    regionName: string
  }
}

export default function HomesByRegionName({ params: { regionName } }: PageProps) {
  regionName = decodeURI(regionName)
  return (
    <>
      <AppHeader regionName={regionName} />
      <AppPageHomes regionName={regionName} />
    </>
  )
}
