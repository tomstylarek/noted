import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>noted</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.info}>
            <h1>Collect Your<br />Thoughts.</h1>
            <div className={styles.infoDescription}>
              <Link href="/notes">
                <a className={styles.infoDescription__link}>Get Started</a>
              </Link>
              <p className={styles.infoDescription__text}>Take fast notes the simple way for free.</p>
            </div>
          </div>
          <div className={styles.illustration}>
            <img src="/girl-with-books.svg" alt="girl" />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home