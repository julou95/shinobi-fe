import { useState } from 'react'
import Image from 'next/image'
import Icons from '@/components/icons'
import styles from '@/styles/Gallery.module.scss'

export default function Gallery({ data }) {
  const [showAll, setShowAll] = useState(false)
  const [activeImage, setActiveImage] = useState()
  const images = data?.[0]?.attributes?.image?.data || []
  const sliced = images.slice(0, showAll ? images.length : 5)

  const selectImg = (id) => {
    setActiveImage(id)
  }

  return (
    <div className={styles.gallery}>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"><span>Galerie</span></h1>
      <div uk-grid="masonry: true;" className="uk-child-width-1-2@s uk-child-width-1-3@m">
        {sliced.map((image, index) => (
          <div onClick={() => selectImg(index)} key={index}>
            <div className={`uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle ${styles.imgWrapper}`} uk-parallax="opacity: 0,1; y: 50,0; end: 95vh + 50%">
              <Image
                className={`${styles.image} ${activeImage === index ? styles.active : ''}`}
                src={image?.attributes?.formats?.small?.url || image?.attributes?.url || ''}
                height={400}
                width={200}
                alt={image?.attributes?.alternativeText}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.showAll} uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%">
        <button onClick={() => setShowAll(prev => !prev)}>{showAll ? 'Weniger' : 'Mehr'} anzeigen</button>
      </div>
      {sliced && activeImage >= 0 &&
        <div className={styles.hoverGalleryWrapper}>
          <div className={styles.closeWrapper}>
            <div className={styles.close} onClick={() => setActiveImage(-1)}>
              <Icons name="close" size={35} />
              Close
            </div> 
          </div>
          <div className={styles.hoverImageWrapper}>
            {
              activeImage > 0 &&
                <div className={styles.prev} onClick={() => selectImg(activeImage - 1)}>
                  <Icons name="prev" size={35} />
                </div>
            }
            <img
              className={styles.bigImage}
              src={sliced[activeImage]?.attributes?.formats?.large?.url || sliced[activeImage]?.attributes?.url || ''}
              alt={sliced[activeImage]?.attributes?.alternativeText}
            />
            {
              activeImage < sliced.length-1 &&
                <div className={styles.next} onClick={() => selectImg(activeImage + 1)}>
                  <Icons name="next" size={35} />
                </div>
            }
          </div>
        </div>
      }
    </div>
  )
}