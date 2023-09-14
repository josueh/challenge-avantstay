'use client'
import React from 'react'
import { LoadingMore, VisibilityObserver } from '../shared'
import * as UI from './app-page-homes.styles'
import { MainTitle } from './main-title'
import { CardHome } from '../card-home'
import { useHomesAPI } from '~/hooks/homes-api'
import { HomesNotFound } from '../homes-not-found'

type Props = {
  regionName?: string
}

export const AppPageHomes = ({ regionName }: Props) => {
  const { loading, error, total, homes, loadMore } = useHomesAPI({ regionName })

  return (
    <UI.Wrapper>
      {error ? (
        <HomesNotFound pageCenter region={regionName} />
      ) : (
        <>
          <MainTitle loading={loading} total={total} />
          <UI.Cards>
            {homes.map((home, index) => (
              <React.Fragment key={index.toString() + home.id}>
                <CardHome loading={loading} data={home} />
                {index + 1 === homes.length ? null : <UI.CardSeparator />}
              </React.Fragment>
            ))}
          </UI.Cards>
        </>
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
