import { useRef, useState } from 'react'
import styles from '@/styles/Contact.module.scss'
import { sendEmail } from 'src/api/strapi'
import Icons from './icons'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const betreffRef = useRef()
  const textRef = useRef()

  const sendMail = () => {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      betreff: betreffRef.current.value,
      text: textRef.current.value,
    }

    const required = [
      nameRef,
      emailRef,
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
        } else {
          if (res.message.includes('email')) {
            emailRef.current.classList.add(styles.error)
          }
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
    emailRef.current.value = ''
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
          <h3><span>Adresse</span></h3>
          <div>Shinobi-Tattoo</div>
          <div>
            Seftigenstrasse 83
          </div>
          <div>
            3007 Bern
          </div>
        </div>
        <div className={styles.verticalSplit} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;"></div>
        <div className={styles.contactRight}>
          <label uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
            Name *
            <input type="text" ref={nameRef} placeholder="Name" />
          </label>
          <label uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
            Email *
            <input type="email" ref={emailRef} placeholder="Email Adresse" />
          </label>
          <label uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
            Telefon (optional)
            <input type="text" ref={phoneRef} placeholder="Telefon" />
          </label>
          <label uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
            Betreff *
            <input type="text" ref={betreffRef} placeholder="Betreff" />
          </label>
          <label uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">
            Nachricht *
            <textarea ref={textRef} placeholder="Text"></textarea>
          </label>
          <button onClick={sendMail} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">Senden</button>
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