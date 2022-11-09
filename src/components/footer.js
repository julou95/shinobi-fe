import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
      <iframe src="https://snazzymaps.com/embed/436830" width="100%" height="300px" style={{ border: 'none' }}></iframe>
      <div className={`${styles.area} ${styles.footerEnd}`}>
        <div className={styles.content}>
          Shinobi Tattoo 2022 © <Link href="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  )
}