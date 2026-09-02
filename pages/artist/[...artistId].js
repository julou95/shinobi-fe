import Head from 'next/head'
import Header from '@/components/header'
import Icons from '@/components/icons'
import styles from '@/styles/Artist.module.scss'
import { fetchContent } from '@/api/strapi'
import { fetchIG } from '@/api/insta'
import Markdown from 'react-markdown'
import { strapiUrl } from '@/api/strapi'


export const Artist = ({ artist, images }) => {
  return (
    <>
      <Head>
        <title>Shinobi Tattoo</title>
        <meta name="description" content={`Shinobi Tattoo - ${artist.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header standalone />
      <main className={styles.container}>
        <h1><span>{artist.name}</span></h1>
        <div className={styles.content}>
          <img className={styles.artistPic} src={`${strapiUrl()}${data?.profilePic[0]?.formats?.medium?.url || data?.profilePic[0]?.url || ''}`} />
          <p>
            <Markdown>
              {artist.longDescription}
            </Markdown>
          </p>
        </div>
        {
          images.length ?
          <div className={styles.instaFeed}>
            <h2><span>Meine Arbeiten</span></h2>
            <div className={styles.igGalleryWrapper}>
              {images.map((img, index) => (
                <div className={styles.imgWrapper} key={index}>
                  <img src={img.mediaUrl} />
                </div>
              ))}
            </div>
          </div> : <></>
        }
        {artist.instagram &&
          <div className={styles.goToWrapper}>
            <a href={`https://www.instagram.com/${artist.instagram}`} className={styles.instaButton} target="_blank" rel="noreferrer">
              <Icons name="instagram" size="24" viewBox="256" />
              {artist.instagram}
            </a>
          </div>
        }
      </main>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const artist = await fetchContent(`artists/${params.artistId}`)
  const igImages = artist?.instaFeed ? await fetchIG(artist?.instaFeed) : []

  return {
    props: {
      artist,
      images: igImages?.media || [],
    }
  }
}

export default Artist