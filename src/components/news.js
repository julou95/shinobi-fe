import { useState } from 'react'
import Article from './article'
import Button from './button'
import styles from '@/styles/Article.module.scss'

export default function News({ data }) {
  const [showAll, setShowAll] = useState(false)

  return (
    <div>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"><span>News</span></h1>
      {data.slice(0, showAll ? data.length : 3).map(article => <Article data={article} key={article.id} />)}
      {
        data.length > 3 &&
          <div className={styles.buttonWrapper}>
            <Button text={`${showAll ? 'Weniger' : 'Mehr'} anzeigen`} clickAction={() => setShowAll(prev => !prev)} />
          </div>
      }
    </div>
  )
}