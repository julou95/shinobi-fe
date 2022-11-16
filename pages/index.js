import { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from 'next/head'
import Script from 'next/script'
import { fetchContent } from '../src/api/strapi'
import Header from '@/components/header'
import styles from '@/styles/Home.module.scss'

export default function Home({ home = {}, articles = {}, artists = {}, gallery = {} }) {
  const Welcome = dynamic(() => import('@/components/home'), {
    suspense: true,
  })
  const News = dynamic(() => import('@/components/news'), {
    suspense: true,
  })
  const Artists = dynamic(() => import('@/components/artists'), {
    suspense: true,
  })
  const Gallery = dynamic(() => import('@/components/gallery'), {
    suspense: true,
  })
  const Contact = dynamic(() => import('@/components/contact'), {
    suspense: true,
  })

  const scrollDown = () => {
    window.scrollTo({top: window.innerHeight+1, behavior: 'smooth'});
  }

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.15.12/dist/js/uikit.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.15.12/dist/js/uikit-icons.min.js"></Script>
      <Head>
        <title>Shinobi Tattoo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div uk-parallax="bgy: -100" className={styles.top}>
          <div className={styles.logo}>
            <img src="https://shinobi-aws-s3-images-bucket.s3.eu-central-1.amazonaws.com/medium_shinobi_logo_ce066ca1ac.png" />
          </div>
          <div className={styles.scrolldownWrapper}>
            <div className={styles.mouse} onClick={scrollDown}></div>
          </div>
        </div>
        <Header />
        {
          !!home?.attributes?.home?.[0] ? 
            <div className={styles.area}>
              <div className={styles.content}>
                <Suspense fallback={<div>...</div>}>
                  <Welcome data={home.attributes.home[0]} />
                </Suspense>
              </div>
            </div> : <></>
        }
        {
          !!articles.length ?
            <div className={styles.area}>
              <div className={styles.content}>
                <Suspense fallback={<div>...</div>}>
                  <News data={articles} />
                </Suspense>
              </div>
            </div> : <></>
        }
        {
          !!gallery.length ?
            <div className={styles.area}>
              <div className={styles.content}>
                <Suspense fallback={<div>...</div>}>
                  <Gallery data={gallery} />
                </Suspense>
              </div>
            </div> : <></>
        }
        {
          !!artists.length ?
            <div className={styles.area}>
              <div className={styles.content}>
                <Suspense fallback={<div>...</div>}>
                  <Artists data={artists} />
                </Suspense>
              </div>
            </div> : <></>
        }
        <div className={styles.area}>
          <div className={styles.content}>
            <Suspense fallback={<div>...</div>}>
              <Contact />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
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
