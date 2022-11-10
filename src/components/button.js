import styles from '@/styles/Button.module.scss'
export default function Button({ text, clickAction }) {
  return (
    <button
      onClick={clickAction}
      uk-parallax="opacity: 0,1; y: 50,0; end: 85vh + 50%"
      className={styles.button}
    >
      {text}
    </button>
  )
}