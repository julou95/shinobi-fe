import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.scss'
import { markdownDesc } from '@/constants/helpers'

export default function Home({ data }) {
  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchDesc = async () => await markdownDesc(data.text)
    fetchDesc().then(res => {
      setDescription(res)
    })
  }, [])

  return (
    <div className={styles.homeWrapper}>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%;">
        <span>{data.title}</span>
      </h1>
      <p uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%;" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  )
}