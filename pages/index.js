import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { useState } from 'react'
import CumtomComponent from './components/CumtomComponent'
import Loader from './components/Loader'

export default function Home() {
  // let [dom, setDom] = useState(false)
  return (
    <>
      {/* <Script
        id="tailwind-css"
        src="https://cdn.tailwindcss.com"
        onReady={() => {
          setDom(true)
        }}
      /> */}

      <div className={styles.container}>
        <Head>
          <title>Home | CodingWithBongProgramiz</title>
          <meta name="description" content="Home | CodingWithBongProgramiz" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>

          {/* {
            dom ?
              <CumtomComponent dom={dom} /> : ""
          }
          {
            !dom ? <Loader /> : ""
          } */}

          <CumtomComponent />
        </main>
      </div>
    </>
  )
}
