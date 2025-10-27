import { useRef } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.scss'

export const Header = ({ standalone = false }) => {
  const router = useRouter()
  const headRef = useRef()

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if (standalone) {
      router.push('/')
    }
  }

  const goTo = (link) => {
    router.push(link)
  }

  return (
    <div ref={headRef} className={styles.header}>
      <div className={styles.content}>
        <div className={styles.headerCenter}>
          <img src="https://shinobi-aws-s3-images-bucket.s3.eu-central-1.amazonaws.com/thumbnail_shinobi_logo_ce066ca1ac.png" onClick={scrollTop} />
        </div>
        <div className={styles.menuLarge}>
          <div className={`${styles.menuItem} ${router.asPath === '/artists' ? styles.active : ''}`} onClick={() => goTo('/artists')}>
            Artists
          </div>
          <div className={`${styles.menuItem} ${router.asPath === '/gallery' ? styles.active : ''}`} onClick={() => goTo('/gallery')}>
            Gallery
          </div>
          <div className={`${styles.menuItem} ${router.asPath === '/about' ? styles.active : ''}`} onClick={() => goTo('/about')}>
            About
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header