import { useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.scss'
export const Header = ({ standalone = false }) => {
  const router = useRouter()
  const headRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll, { passive: true })
  }, [])

  useEffect(() => {
    if (standalone) {
      headRef.current.classList.add(styles.headerVisible)
    } else {
      headRef.current.classList.remove(styles.headerVisible)
    }
  }, [standalone])

  const onScroll = useCallback(event => {
    const { pageYOffset, innerHeight } = window;
    if (pageYOffset >= innerHeight || standalone) {
      headRef.current.classList.add(styles.headerVisible)
    } else {
      headRef.current.classList.remove(styles.headerVisible)
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if (standalone) {
      router.push('/')
    }
  }

  return (
    <div ref={headRef} className={`${styles.header} ${standalone ? styles.headerVisible : ''}`}>
      <div className={styles.headerCenter}>
        <img src="/shinobi-logo.png" onClick={scrollTop} />
      </div>
    </div>
  )
}

export default Header