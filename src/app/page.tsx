'use client'
import { useSearchParams } from 'next/navigation'
import { QueryStringContextProvider } from '~/contexts'
import { InputSearchText } from '~/components/input-search-text'
import { HomesNotFound } from '~/components/homes-not-found'
import styles from './page.module.css'

export default function Home() {
  const searchParams = useSearchParams()
  const searchUrl = searchParams?.toString()

  return (
    <QueryStringContextProvider initialSearchUrl={searchUrl}>
      <main className={styles.main}>
        <h1>Challenge AvantStay</h1>
        <InputSearchText />
        <HomesNotFound />
      </main>
    </QueryStringContextProvider>
  )
}
