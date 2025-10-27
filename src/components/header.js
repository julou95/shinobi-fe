import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import styles from '@/styles/Header.module.scss'
import Icons from './icons'

export const Header = ({ standalone = false }) => {
  const router = useRouter()
  const headRef = useRef()

  const [isOpen, setIsOpen] = useState(false)

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if (standalone) {
      router.push('/')
    }
  }

  const goTo = (link) => {
    router.push(link)
  }

  const toggleNavi = () => {
    if (window.scrollY < window.innerHeight) {
      window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
    }

    document.getElementsByTagName('body')[0].style.overflow = isOpen ? '' : 'hidden'

    setTimeout(() => {
      console.log('document.getElementsByTagName(body)', document)
      setIsOpen(!isOpen);
    }, 200)
  };

  const goMobile = (link) => {
    document.getElementsByTagName('body')[0].style.overflow = '';
    goTo(link)
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200)
  }

  return (
    <>
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
        <div className={styles.menuSmall}>
          <div onClick={toggleNavi} className={cx(styles.icon, {[styles.open]: isOpen})}>
            <div className={cx(styles.line, styles.top)} />
            <div className={cx(styles.line, styles.center)} />
            <div className={cx(styles.line, styles.bottom)} />
          </div>
        </div>
      </div>
    </div>
    {isOpen &&
      <div className={styles.overlay}>
        <div className={styles.naviOpen}>
          <div className={styles.navItemWrapper}>
            <div className={styles.naviItem} onClick={() => goMobile('/')}>
              Home
            </div>
            <div className={styles.naviItem} onClick={() => goMobile('/artists')}>
              Artists
            </div>
            <div className={styles.naviItem} onClick={() => goMobile('/gallery')}>
              Gallery
            </div>
            <div className={styles.naviItem} onClick={() => goMobile('/about')}>
              About
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Header