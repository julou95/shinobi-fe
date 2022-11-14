import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '@/components/header'
import Icons from '@/components/icons'
import styles from '@/styles/Artist.module.scss'
import { fetchContent } from '@/api/strapi'
import { markdownDesc } from '@/constants/helpers'

export const Artist = ({ artist }) => {
  console.log('LJ - artist', artist);

  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchDesc = async () => await markdownDesc(artist.attributes.description)
    fetchDesc().then(res => {
      setDescription(res)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Shinobi Tattoo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header standalone />
      <main className={styles.container}>
        <h1><span>{artist.attributes.name}</span></h1>
        <div className={styles.content}>
          <img src={artist.attributes?.profilePic?.data?.[0]?.attributes?.formats?.medium?.url || artist.attributes.profilePic.url} />
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          {artist.attributes?.instagram &&
            <a href={`https://www.instagram.com/${artist.attributes.instagram}`} className={styles.instaHandle} target="_blank" rel="noreferrer">
              <Icons name="instagram" size="24" viewBox="256" />
              {artist.attributes.instagram}
            </a>
          }
        </div>
        {artist.attributes?.wannados?.data?.length &&
          <>
            <h3>Wanna Dos</h3>
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1"  uk-slideshow="autoplay: true; animation: push;" uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%">
              <ul className="uk-slideshow-items">
                {artist.attributes?.wannados?.data?.map((image, index) => (
                  <li key={index}>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
                      <img 
                        src={image?.attributes?.formats?.large?.url || image?.attributes?.url || ''}
                        alt=""
                        uk-cover
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        }
      </main>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const artist = await fetchContent(`artists/${params.artistId}`)

  return {
    props: {
      artist,
    }
  }
}

export default Artist