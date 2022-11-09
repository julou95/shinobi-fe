import { useState, useEffect } from 'react'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import styles from '@/styles/Artist.module.scss'
import { getImageUrl } from '@/constants/helpers'
import Icons from '@/components/icons'

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
      console.log('LJ - desc', res);
      setDescription(res)
    })
  }, [])

  return (
    <div className={styles.artist}>
      <div className={styles.profilePic} uk-parallax={`opacity: 0,1; y: 50,0; end: 85vh + 50%;`}>
        <img src={getImageUrl(data.attributes.profilePic)} />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descriptionLarge} uk-parallax={`opacity: 0,1; ${ isEven(index) ? '' : 'x: 100,100;' } y: 50,0; end: 85vh + 50%;`}>
          {
            data.attributes.guest && <h5>Gasttättowierer</h5>
          }
          <h3>{data.attributes.name}</h3>
          <div className={styles.desctiption} dangerouslySetInnerHTML={{ __html: description }}></div>
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
          <div className={styles.desctiption} dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </div>
    </div>
  )
}