import Footer from '@/components/footer'
import styles from '@/styles/Layout.module.scss'

export default function DefaultLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  )
}