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
    sendEmail(data).then((res) => {
      if (res.status === 200) {
        setShowSuccess(true)
        reset()
      }
    })
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
            <input type="text" ref={nameRef} placeholder="Name" uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;" />
            <input type="email" ref={emailRef} placeholder="Email Adresse" uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;" />
            <input type="text" ref={phoneRef} placeholder="Telefon" uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;" />
            <input type="text" ref={betreffRef} placeholder="Betreff" uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;" />
            <textarea ref={textRef} placeholder="Text" uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;"></textarea>
            {
              showSuccess ?
                <div className={styles.success} uk-alert>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </div>
                  <Icons name="close" clickAction={() => setShowSuccess(false)}/>
                </div> :
                <button onClick={sendMail} uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%;">Senden</button>
            }
        </div>
      </div>
    </>
  )
}