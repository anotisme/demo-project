import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home
      </main>
    </div>
  )
}

export default Home
