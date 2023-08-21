import { HomesNotFound } from '~/components/homes-not-found'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Challenge AvantStay</h1>
      <HomesNotFound />
    </main>
  )
}
