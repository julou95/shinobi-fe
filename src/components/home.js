import styles from '@/styles/Home.module.scss'
import Markdown from 'react-markdown'

export default function Home({ data }) {
  return (
    <div className={styles.homeWrapper}>
      <h1 uk-parallax="opacity: 0,1; y: 10,0; end: 75vh + 100%;">
        <span>{data.Title}</span>
      </h1>
      <div uk-parallax="opacity: 0,1; y: 10,0; end: 75vh + 100%;">
        <Markdown>{data.Content}</Markdown>
      </div>
    </div>
  )
}