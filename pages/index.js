import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { fetchContent } from '../src/api/strapi'
import Header from '@/components/header'
import Welcome from '@/components/home'
import News from '@/components/news'
import Artists from '@/components/artists'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import styles from '@/styles/Home.module.scss'

export default function Home({ home, articles, artists, gallery }) {
  return (
    <>
      <div className={styles.container}>
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.15.12/dist/js/uikit.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.15.12/dist/js/uikit-icons.min.js"></Script>
        <Head>
          <title>Shinobi Tattoo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.12/dist/css/uikit.min.css" />
        </Head>
        <main className={styles.main}>
          <Header />
          <div uk-parallax="bgy: -100" className={styles.top}>
            <div className={styles.logo}>
              <img src="/shinobi-logo.png" />
            </div>
            <div className={styles.scrolldownWrapper}>
              <div className={styles.mouse}></div>
            </div>
          </div>
          <div className={styles.area}>
            <div className={styles.content}>
              <Welcome data={home.attributes.home[0]} />
            </div>
          </div>
          <div className={styles.area}>
            <div className={styles.content}>
              <News data={articles} />
            </div>
          </div>
          <div className={styles.area}>
            <div className={styles.content}>
              <Artists data={artists} />
            </div>
          </div>
          <div className={styles.area}>
            <div className={styles.content}>
              <Gallery data={gallery} />
            </div>
          </div>
          <div className={styles.area}>
            <div className={styles.content}>
              <Contact />
            </div>
          </div>
        </main>
      </div>
      <footer className={styles.footer} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
        <iframe src="https://snazzymaps.com/embed/436830" width="100%" height="300px" style={{ border: 'none' }}></iframe>
        <div className={`${styles.area} ${styles.footerEnd}`}>
          <div className={styles.content}>
            Shinobi Tattoo 2022 © <Link href="/impressum">Impressum</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export async function getStaticProps(context) {
  const home = await fetchContent('homepage')
  const articles = await fetchContent('articles')
  const artists = await fetchContent('artists')
  const gallery = await fetchContent('galleries')

  return {
    props: {
      home,
      articles,
      artists,
      gallery,
    }
  }
}
