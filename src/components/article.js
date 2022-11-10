import styles from '@/styles/Article.module.scss'
import Image from 'next/image'

export default function Article({ data }) {
  const formatDate = (date) => {
    const newDate = new Date(date)
    return `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`
  }

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
        <h5>{formatDate(data.attributes.publishedAt)}</h5>
        <h3>{data.attributes.title}</h3>
        <p>{data.attributes.text}</p>
      </div>
    </div>
  )
}