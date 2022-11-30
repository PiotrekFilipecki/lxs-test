import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LXS Land</title>
        <meta name="description" content="LXS Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <video autoPlay playsInline loop muted className={styles.videobg}>
            <source src="https://www.datocms-assets.com/26125/1669813896-bgdesktop.mp4" type='video/mp4'/>
        </video>

        <div className={styles.wrapper}>
          <img src='https://www.datocms-assets.com/26125/1669814297-lxscover.png' />
          <a href="#">
            <img src="https://www.datocms-assets.com/26125/1669814626-orderbutton1-edited.png" />
          </a>
        </div>

    </div>
  )
}
