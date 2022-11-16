import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import Icons from '@/components/icons'
import styles from '@/styles/Artist.module.scss'

const isEven = (nmbr) => nmbr % 2 === 0

const markdownDesc = async (text) => {
  const matterResult = matter(text);
  const parsed = await remark().use(html).process(matterResult.content);
  const parsedHtml = parsed.toString()

  return parsedHtml;
}

export default function Artist({ data, index }) {
  const [description, setDescription] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchDesc = async () => await markdownDesc(data.attributes.description)
    fetchDesc().then(res => {
      setDescription(res)
    })
  }, [])

  const goTo = () => {
    router.push(`/artist/${data.id}`)
  }

  const openInsta = (e) => {
    e.stopPropagation()
    window.open(`https://www.instagram.com/${data.attributes.instagram}`, '_blank')
  }

  return (
    <div className={styles.artist}>
      <div className={styles.profilePic} uk-parallax={`opacity: 0,1; y: 50,0; end: 85vh + 50%;`}>
        <Image
          className={styles.profilePicLarge}
          src={data?.attributes?.profilePic?.data[0]?.attributes?.formats?.medium?.url || data?.attributes?.profilePic?.data[0]?.attributes?.url || ''}
          width={400}
          height={200}
          alt={data.attributes.name}
        />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descriptionLarge} onClick={goTo} uk-parallax={`opacity: 0,1; ${ isEven(index) ? '' : 'x: 100,100;' } y: 50,0; end: 85vh + 50%;`}>
        <div className={styles.artistHeader}>
          <div className={styles.artistLeft}>
            <h3>{data.attributes.name}</h3>
            {
              data.attributes.guest && <h5>Gasttättowierer</h5>
            }
            </div>
            <div className={styles.arrow}>
              <Icons name="forth" size="40" />
            </div>
          </div>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
          {data.attributes.instagram &&
            <a onClick={openInsta} className={styles.instaHandle} target="_blank" rel="noreferrer">
              <Icons name="instagram" size="24" viewBox="256" />
              {data.attributes.instagram}
            </a>
          }
        </div>
        <div className={styles.descriptionSmall} uk-parallax={`opacity: 0,1; y: 50,0; end: 85vh + 50%;`} onClick={goTo}>
          <Image
            src={data?.attributes?.profilePic?.data[0]?.attributes?.formats?.medium?.url || data?.attributes?.profilePic?.data[0]?.attributes?.url || ''}
            width={400}
            height={200}
            alt={data.attributes.name}
            className={styles.profilePicSmall}
          />
          <div className={styles.artistHeader}>
            <div className={styles.artistLeft}>
              <h3>{data.attributes.name}</h3>
              {
                data.attributes.guest && <h5>Gasttättowierer</h5>
              }
            </div>
            <div className={styles.arrow}>
              <Icons name="forth" size="40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}