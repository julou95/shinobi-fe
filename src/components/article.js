import styles from '@/styles/Article.module.scss'
import Image from 'next/image'

export default function Article({ data }) {
  return (
    <div className={styles.article}>
      <Image
        className={styles.articleImage}
        src={data?.attributes?.image?.data?.attributes?.formats?.medium?.url || data?.attributes?.image?.data?.attributes?.url || ''}
        uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"
        width={400}
        height={200}
        alt={data.attributes.title}
      />
      <div className={styles.text} uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%">
        <h3>{data.attributes.title}</h3>
        <p>{data.attributes.text}</p>
      </div>
    </div>
  )
}