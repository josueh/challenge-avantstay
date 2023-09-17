'use client'
import React from 'react'
import { LoadingMore, VisibilityObserver } from '../shared'
import * as UI from './app-page-homes.styles'
import { MainTitle } from './main-title'
import { CardHome } from '../card-home'
import { useHomesAPI } from '~/hooks/homes-api'
import { HomesNotFound } from '../homes-not-found'
import { useQueryStringContext } from '~/contexts'
import { useRouter } from 'next/navigation'
import { usePricesAPI } from '~/hooks/prices-api'

type Props = {
  regionName?: string
}

export const AppPageHomes = ({ regionName }: Props) => {
  const router = useRouter()
  const { checkIn, checkOut, guests, order } = useQueryStringContext().data
  const period = checkIn && checkOut ? { checkIn, checkOut } : undefined
  const query = { regionName, period, guests, order }
  const { loading, error, total, homes, loadMore } = useHomesAPI(query)

  const homesIds = loading ? [] : homes.map((i) => i.id)
  const { loading: loadingPrices, pricingByHome } = usePricesAPI({ period, homesIds })

  function handleClickEmptyScreen() {
    const path = regionName && !error ? `/regions/${regionName}` : `/homes`
    router.push(path)
  }

  return (
    <UI.Wrapper>
      {error ? (
        <HomesNotFound pageCenter onClick={handleClickEmptyScreen} />
      ) : (
        <>
          {total === 0 && !loading ? (
            <HomesNotFound pageCenter region={regionName} onClick={handleClickEmptyScreen} />
          ) : (
            <MainTitle loading={loading} total={total} />
          )}
          <UI.Cards>
            {homes.map((home, index) => (
              <React.Fragment key={index.toString() + home.id}>
                <CardHome
                  loading={loading}
                  data={home}
                  loadingPrices={loadingPrices}
                  pricing={pricingByHome?.[home.id]}
                />
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
