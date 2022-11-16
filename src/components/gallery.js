import Icons from '@/components/icons'
import styles from '@/styles/Gallery.module.scss'

export default function Gallery({ data }) {
  const images = data?.[0]?.attributes?.image?.data || []

  return (
    <div className={styles.gallery}>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"><span>Impressionen</span></h1>
      <div uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%" className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1"  uk-slideshow="autoplay: true; min-height: 300; max-height: 600; animation: push;">
        <ul className="uk-slideshow-items">
          {images.map((image, index) => (
            <li key={index}>
              <img 
                src={image?.attributes?.formats?.large?.url || image?.attributes?.url || ''}
                alt=""
                uk-cover="true"
              />
            </li>
          ))}
        </ul>
        <a className={`uk-position-center-left uk-position-small ${styles.arrowLeft}`} href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
        <a className={`uk-position-center-right uk-position-small ${styles.arrowRight}`} href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
      </div>
    </div>
  )
}