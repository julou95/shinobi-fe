import Artist from './artist'
import styles from '@/styles/Artists.module.scss'

export default function Artists({ data, standalone = false }) {
  return (
    <div className={styles.wrapper}>
      <h1 uk-parallax={standalone ? '' : 'opacity: 0,1; y: 50,0; end: 85vh + 50%'}><span>Unser Team</span></h1>
      {data.map((artist, index) => <Artist data={artist} index={index} key={index} standalone={standalone} />)}
    </div>
  )
}