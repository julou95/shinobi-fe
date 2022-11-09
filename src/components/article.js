import styles from '@/styles/Article.module.scss'

export default function Article({ data }) {
  return (
    <div className={styles.article}>
      <img
        className={styles.articleImage}
        src={data?.attributes?.image?.data?.formats?.medium?.url || data?.attributes?.image?.data?.attributes?.url || ''}
        uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"
      />
      <div className={styles.text} uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%">
        <h3>{data.attributes.title}</h3>
        <p>{data.attributes.text}</p>
      </div>
    </div>
  )
}