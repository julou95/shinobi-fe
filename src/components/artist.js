import { useRouter } from 'next/router'
import Image from 'next/image'
import Icons from '@/components/icons'
import styles from '@/styles/Artist.module.scss'
import Markdown from 'react-markdown'

const isEven = (nmbr) => nmbr % 2 === 0


export default function Artist({ data, index, standalone = false }) {
  const router = useRouter()


  const goTo = () => {
    router.push(`/artist/${data.documentId}`)
  }

  const openInsta = (e) => {
    e.stopPropagation()
    window.open(`https://www.instagram.com/${data.instagram}`, '_blank')
  }

  return (
    <div className={styles.artist} onClick={goTo} uk-parallax={standalone ? '' : 'opacity: 0,1; y: 50,0; end: 85vh + 50%;'}>
      <div className={styles.profilePic}>
        <Image
          className={styles.profilePicLarge}
          src={`${data?.profilePic[0]?.url || ''}`}
          width={400}
          height={200}
          alt={data.name}
        />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descriptionLarge}>
        <div className={styles.artistHeader}>
          <div className={styles.artistLeft}>
            <h3>{data.name}</h3>
            {
              data.guest && <h5>Gasttättowierer</h5>
            }
            {
              data.inAusbildung && <h5>In Ausbildung</h5>
            }
            </div>
            <div className={styles.arrow}>
              <Icons name="forth" size="40" />
            </div>
          </div>
          <div className={styles.description}>
            <Markdown>
              {data.description}
            </Markdown>
          </div>
          {data.instagram &&
            <a onClick={openInsta} className={styles.instaHandle} target="_blank" rel="noreferrer">
              <Icons name="instagram" size="24" viewBox="256" />
              {data.instagram}
            </a>
          }
        </div>
        <div className={styles.descriptionSmall} onClick={goTo}>
          <Image
            src={`https://nameless-plains-58678-57bc37344216.herokuapp.com${data?.profilePic[0]?.formats?.medium?.url || data?.profilePic[0]?.url || ''}`}
            width={400}
            height={200}
            alt={data.name}
            className={styles.profilePicSmall}
          />
          <div className={styles.artistHeader}>
            <div className={styles.artistLeft}>
              <h3>{data.name}</h3>
              {
                data.guest && <h5>Gasttättowierer</h5>
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