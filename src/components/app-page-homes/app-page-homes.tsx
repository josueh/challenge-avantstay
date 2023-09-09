'use client'
import { useEffect, useState } from 'react'
import { HomesNotFound } from '../homes-not-found'
import { InputSearchText } from '../input-search-text'
import { SelectRegionList } from '../select-region-list'
import { Space } from '../shared/space'
import * as UI from './app-page-homes.styles'
import { MainTitle } from './main-title'
import { useRouter } from 'next/navigation'

type Props = {
  regionName?: string
}

export const AppPageHomes = ({ regionName }: Props) => {
  const router = useRouter()
  const [fakeTotal, setFakeTotal] = useState(0)

  useEffect(() => {
    const time = setTimeout(() => setFakeTotal(32), 1000)
    return () => void clearTimeout(time)
  }, [])

  function handleSelectRegion(region: string) {
    const empty = region === 'Any region'
    router.push(empty ? `/homes` : `/regions/${region}`)
  }

  return (
    <UI.Wrapper>
      <MainTitle loading={!fakeTotal} total={fakeTotal} />
      <Space height={30} />
      <UI.RegionName>{regionName ?? 'All homes'}</UI.RegionName>
      <Space height={20} />
      <InputSearchText />
      <Space height={20} />
      <SelectRegionList initialValue={regionName} onChange={handleSelectRegion} />
      <HomesNotFound />
    </UI.Wrapper>
  )
}
