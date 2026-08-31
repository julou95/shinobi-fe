import { useRouter } from 'next/router'
import styles from '@/styles/Contact.module.scss'
import Icons from './icons'

export default function Contact() {
  const router = useRouter()

  const goToContact = () => {
    router.push('/contact')
  }

  return (
    <>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%;">
        <span>Kontakt</span>
      </h1>
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
          <h3><span>Social Media</span></h3>
          <a href="https://www.instagram.com/shinobi_tattoo_bern" target="_blank" rel="noreferrer" className={styles.socialLogo}>
              <Icons name="instagram" size="24" viewBox="256" />
              Shinobi Tattoo
          </a>
          <a href="https://www.facebook.com/shinobi.tattoo.bern"  rel="noreferrer" className={styles.socialLogo} target="_blank">
              <Icons name="facebook" size="24" viewBox="24" />
              Shinobi Tattoo
          </a>
          <h3><span>Adresse</span></h3>
          <div>Shinobi-Tattoo</div>
          <div>
            Gurtenareal 12
          </div>
          <div>
            3084 Köniz
          </div>
        </div>
        <div className={styles.verticalSplit} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;"></div>
        <div className={styles.contactRight} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
          <h3><span>Noch Fragen?</span></h3>
          <div>
            Für Terminanfragen oder sonstige Fragen stehen wir dir gerne zur Verfügung.
            <button className={styles.contactButton} onClick={goToContact}>Zum Kontaktformular</button>
          </div>
        </div>
      </div>
    </>
  )
}