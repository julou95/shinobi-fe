import styles from '@/styles/Article.module.scss'
import Image from 'next/image'
import Markdown from 'react-markdown'

export default function Article({ data }) {
  const formatDate = (date) => {
    const newDate = new Date(date)
    return `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`
  }

  return (
    <div className={styles.article}>
      <Image
        className={styles.articleImage}
        src={`${data?.Image?.formats?.medium?.url || data?.Image?.url || ''}`}
        uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"
        width={400}
        height={200}
        alt={data.title}
      />
      <div className={styles.text} uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%">
        <h5>{formatDate(data.publishedAt)}</h5>
        <h2>{data.Title}</h2>
        <div>
          <Markdown>
            {data.Content}
          </Markdown>
        </div>
      </div>
    </div>
  )
}