import { useRef, useState } from 'react'
import styles from '@/styles/Contact.module.scss'
import { sendEmail } from 'src/api/strapi'
import Icons from './icons'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const nameRef = useRef()
  const phoneRef = useRef()
  const betreffRef = useRef()
  const textRef = useRef()

  const sendMail = () => {
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      betreff: betreffRef.current.value,
      text: textRef.current.value,
    }

    const required = [
      nameRef,
      phoneRef,
      betreffRef,
      textRef,
    ]

    if (required.every(val => !!val.current.value)) {
      required.forEach(ref => {
        ref.current.classList.remove(styles.error)
      })
      sendEmail(data).then((res) => {
        if (res?.status === 200) {
            setShowSuccess(true)
            reset()
        }
      })
    } else {
      required.forEach(ref => {
        if (!ref.current.value) {
          ref.current.classList.add(styles.error)
        } else {
          ref.current.classList.remove(styles.error)
        }
      });
    }
  }

  const reset = () => {
    nameRef.current.value = ''
    phoneRef.current.value = ''
    betreffRef.current.value = ''
    textRef.current.value = ''
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
          <label>
            Name *
            <input type="text" ref={nameRef} />
          </label>
          <label>
            Telefon *
            <input type="tel" ref={phoneRef} />
          </label>
          <label>
            Betreff *
            <input type="text" ref={betreffRef} />
          </label>
          <label>
            Nachricht *
            <textarea ref={textRef}></textarea>
          </label>
          <button onClick={sendMail}>Senden</button>
            {
              showSuccess &&
                <div className={styles.success} uk-alert>
                  <div>
                    Deine Anfrage wurde erfolgreich abgeschickt. Wir melden uns bei dir!
                  </div>
                  <Icons name="close" size="35" clickAction={() => setShowSuccess(false)}/>
                </div>
            }
        </div>
      </div>
    </>
  )
}