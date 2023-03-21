import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.containers}>
        <div className={styles.container1}>
          <div className={styles.form}>
            
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.logo}>

          </div>
        </div>
      </div>
    </>
  )
}
