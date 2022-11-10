import { useRouter } from 'next/router'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from '@/styles/Layout.module.scss'

export default function DefaultLayout({ children }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      {/* <Header standalone={router.pathname != '/'} /> */}
        {children}
      <Footer />
    </div>
  )
}