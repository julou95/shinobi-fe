import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const fetchDesc = async () => await markdownDesc(data.attributes.description)
    fetchDesc().then(res => {
      setDescription(res)
    })
  }, [])

  return (
    <div className={styles.artist}>
      <div className={styles.profilePic} uk-parallax={`opacity: 0,1; y: 50,0; end: 85vh + 50%;`}>
        <Image
          src={data?.attributes?.profilePic?.data[0]?.attributes?.formats?.medium?.url || data?.attributes?.profilePic?.data[0]?.attributes?.url || ''}
          width={400}
          height={200}
          alt={data.attributes.name}
        />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descriptionLarge} uk-parallax={`opacity: 0,1; ${ isEven(index) ? '' : 'x: 100,100;' } y: 50,0; end: 85vh + 50%;`}>
          {
            data.attributes.guest && <h5>Gasttättowierer</h5>
          }
          <h3>{data.attributes.name}</h3>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
          {data.attributes.instagram &&
            <a href={`https://www.instagram.com/${data.attributes.instagram}`} className={styles.instaHandle} target="_blank">
              <Icons name="instagram" size="24" viewBox="256" />
              {data.attributes.instagram}
            </a>
          }
        </div>
        <div className={styles.descriptionSmall} uk-parallax={`opacity: 0,1; y: 50,0; end: 85vh + 50%;`}>
          <div className={styles.artistHeader}>
            <div className={styles.artistLeft}>
              <h3>{data.attributes.name}</h3>
              {
                data.attributes.guest && <h5>Gasttättowierer</h5>
              }
            </div>
            <div className={styles.arrow}>
              {/* <Icons name="forth" size="40" /> */}
            </div>
          </div>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
          {data.attributes.instagram &&
            <a href={`https://www.instagram.com/${data.attributes.instagram}`} className={styles.instaHandle} target="_blank">
              <Icons name="instagram" size="24" viewBox="256" />
              {data.attributes.instagram}
            </a>
          }
        </div>
      </div>
    </div>
  )
}