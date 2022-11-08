import { useRef, useEffect, useCallback } from 'react'
import styles from '@/styles/Home.module.scss'
export const Header = () => {
  const headRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll, { passive: true })
  }, [])
  
  const onScroll = useCallback(event => {
    const { pageYOffset, innerHeight } = window;
    if (pageYOffset >= innerHeight) {
      headRef.current.classList.add(styles.headerVisible)
    } else {
      headRef.current.classList.remove(styles.headerVisible)
    }
  }, [])

  return (
    <div ref={headRef} className={styles.header}>
      <div className={`${styles.content} ${styles.headerCenter}`}>
        <img src="/shinobi-logo.png" />
      </div>
    </div>
  )
}

export default Header