import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js - Pagina principal</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image src="/images/city.jpg" width="300" height="500" alt="cidade a noite"/>
      </div>
    </>
  )
}
