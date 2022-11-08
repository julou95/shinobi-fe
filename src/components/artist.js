import styles from '@/styles/Artist.module.scss'
import { getImageUrl } from '@/constants/helpers'
import Icons from '@/components/icons'

const isEven = (nmbr) => nmbr % 2 == 0

export default function Artist({ data, index }) {
  return (
    <div className={styles.artist}>
      <div className={styles.profilePic} uk-parallax={`opacity: 0,1; x: ${isEven(index) ? '-100,0' : '100,0'}; end: 75vh + 50%;`}>
      <img src={getImageUrl(data.attributes.profilePic)} />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descriptionLarge} uk-parallax={`opacity: 0,1; x: ${isEven(index) ? '100,0' : '0,100'}; y: 50,0; end: 75vh + 50%;`}>
          {
            data.attributes.guest && <h5>Gasttättowierer</h5>
          }
          <h3>{data.attributes.name}</h3>
          {data.attributes.description}
        </div>
        <div className={styles.descriptionSmall} uk-parallax={`opacity: 0,1; x: ${isEven(index) ? '100,0' : '-100,0'}; y: 50,0; end: 75vh + 50%;`}>
          <div className={styles.artistHeader}>
            <div className={styles.artistLeft}>
              <h3>{data.attributes.name}</h3>
              {
                data.attributes.guest && <h5>Gasttättowierer</h5>
              }
            </div>
            <div className={styles.arrow}><Icons name="forth" size="40" /></div>
          </div>
          {data.attributes.description}
        </div>
      </div>
    </div>
  )
}