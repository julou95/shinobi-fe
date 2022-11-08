import { useState } from 'react'
import Icons from '@/components/icons'
import styles from '@/styles/Gallery.module.scss'
import { getGalImgUrl } from '@/constants/helpers'

export default function Gallery({ data }) {
  const [activeImage, setActiveImage] = useState()
  const images = data?.[0]?.attributes?.image?.data || []

  const selectImg = (id) => {
    setActiveImage(id)
  }

  return (
    <div className={styles.gallery}>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"><span>Galerie</span></h1>
      <div uk-grid="masonry: true; parallax: 100;" className="uk-child-width-1-2@s uk-child-width-1-3@m">
        {images.map((image, index) => (
          <div onClick={() => selectImg(index)}>
            <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" uk-parallax="opacity: 0,1; y: 50,0; end: 95vh + 50%">
              <img className={`${styles.image} ${activeImage === index ? styles.active : ''}`} src={getGalImgUrl(image)} />
            </div>
          </div>
        ))}
      </div>
      {images && activeImage >= 0 &&
        <div className={styles.hoverGalleryWrapper}>
          <div className={styles.closeWrapper}>
            <div className={styles.close} onClick={() => setActiveImage(-1)}>
              <Icons name="close" size={35} />
              Close
            </div> 
          </div>
          <div className={styles.hoverImageWrapper}>
            <div className={styles.imageWrapper}>
              {
                activeImage > 0 &&
                  <div className={styles.prev} onClick={() => selectImg(activeImage - 1)}>
                    <Icons name="prev" size={35} />
                  </div>
              }
              <img className={styles.bigImage} src={getImageUrl(images[activeImage])} />
              {
                activeImage < images.length-1 &&
                  <div className={styles.next} onClick={() => selectImg(activeImage + 1)}>
                    <Icons name="next" size={35} />
                  </div>
              }
            </div>
          </div>
        </div>
      }
      {/* <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 300; max-height: 600; animation: push">

        <ul class="uk-slideshow-items">
          {images.map(image => (
            <li>
              <img src={`http://localhost:1337${image.attributes.url}`} uk-cover />
            </li>
          ))}
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

      </div> */}
    </div>
  )
}