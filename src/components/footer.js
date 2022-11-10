import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

export default function Footer() {
  const [counter, setCounter] = useState(0)
  const click = () => {
    if (counter === 10) {
      console.log('gotcha! 🍆');
    }
    setCounter(prev => prev+1)
  }

  return (
    <footer className={styles.footer} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
      <iframe src="https://snazzymaps.com/embed/436830" width="100%" height="300px" style={{ border: 'none' }}></iframe>
      <div className={styles.footerEnd}>
        <div className={styles.content}>
          Shinobi Tattoo 2022 © <Link href="/impressum">Impressum</Link> | made with <span onClick={click}>{counter === 11 ? '🍆' : '❤️'}</span>
        </div>
      </div>
    </footer>
  )
}