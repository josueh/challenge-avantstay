'use client'
import React from 'react'
import { InputSearchText } from '../input-search-text'
import { SelectRegionList } from '../select-region-list'
import { LoadingMore, VisibilityObserver } from '../shared'
import * as UI from './app-page-homes.styles'
import { MainTitle } from './main-title'
import { useRouter } from 'next/navigation'
import { CardHome } from '../card-home'
import { useHomesAPI } from '~/hooks/homes-api'
import { HomesNotFound } from '../homes-not-found'
import { TestOnly } from '../shared/test-only'

type Props = {
  regionName?: string
}

export const AppPageHomes = ({ regionName }: Props) => {
  const router = useRouter()
  const { loading, error, total, homes, loadMore } = useHomesAPI({ regionName })

  function handleSelectRegion(region: string) {
    const empty = region === 'Any region'
    router.push(empty ? `/homes` : `/regions/${region}`)
  }

  return (
    <UI.Wrapper>
      {error ? null : <MainTitle loading={loading} total={total} />}
      <TestOnly>
        <UI.RegionName>{regionName ?? 'All homes'}</UI.RegionName>
        <InputSearchText />
        <SelectRegionList initialValue={regionName} onChange={handleSelectRegion} />
      </TestOnly>
      {error ? (
        <HomesNotFound region={regionName} />
      ) : (
        <UI.Cards>
          {homes.map((home, index) => (
            <React.Fragment key={index.toString() + home.id}>
              <CardHome loading={loading} data={home} />
              {index + 1 === homes.length ? null : <UI.CardSeparator />}
            </React.Fragment>
          ))}
        </UI.Cards>
      )}
      <UI.Footer>
        {!error && homes.length < total ? (
          <VisibilityObserver onVisible={loadMore}>
            <LoadingMore>Loading more homes</LoadingMore>
          </VisibilityObserver>
        ) : null}
      </UI.Footer>
    </UI.Wrapper>
  )
}
