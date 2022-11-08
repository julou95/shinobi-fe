import styles from '@/styles/Home.module.scss'

export default function Home({ data }) {
  return (
    <div className={styles.homeWrapper}>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%;">
        <span>{data.title}</span>
      </h1>
      <p uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%;">{data.text}</p>
    </div>
  )
}