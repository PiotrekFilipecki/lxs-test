import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {isMobile} from 'react-device-detect';


const VideoTrigger = () => {
  if(!isMobile) {
    return <source src="https://www.datocms-assets.com/26125/1669813896-bgdesktop.mp4" type='video/mp4'/>
  } else {
    return <source src="https://www.datocms-assets.com/26125/1669814018-bgmobile.mp4" type='video/mp4'/>
    
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LXS Land</title>
        <meta name="description" content="LXS Land" />
        <meta property="og:title" content="LXS Land" />
<meta property="og:site_name" content="LXS Land" />
<meta property="og:url" content="lxs.land" />
<meta property="og:description" content="LXS Land" />
<meta property="og:type" content="" />
<meta property="og:image" content="https://www.datocms-assets.com/26125/1669814297-lxscover.png"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <video autoPlay playsInline loop muted className={styles.videobg}>
          <VideoTrigger />


            
        </video>

        <div className={styles.wrapper}>
          <img className={styles.coverimage} src='https://www.datocms-assets.com/26125/1669814297-lxscover.png' />
          <a href="https://muzyka.sklep.pl/lxs" target="_blank" rel="noreferrer">
            <img src="https://www.datocms-assets.com/26125/1669832896-orderbutton1-edited-edited.png" />
          </a>
        </div>

    </div>
  )
}
