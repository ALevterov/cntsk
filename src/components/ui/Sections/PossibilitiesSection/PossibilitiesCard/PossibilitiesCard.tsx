import Image from 'next/image'
import styles from './PossibilitiesCard.module.css'
import PossibilitiesBtnMore from '../PossibilitiesBtnMore/PossibilitiesBtnMore'
import { useEffect, useRef, useState } from 'react'
const PossibilitiesCard = ({
  title,
  children,
  image,
  className,
}: {
  title: string
  children: React.ReactNode
  image: string
  className: string
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.visible}>
        <div className={styles.imageContainer}>
          <Image src={image} alt='background' fill />
        </div>
        <div className={styles.rightSide}>
          <h4 className={styles.title}>{title}</h4>
          <PossibilitiesBtnMore isOpened={isOpened} setIsOpened={setIsOpened} />
        </div>
      </div>

      <div
        className={[
          styles.content,
          isOpened ? styles.opened : '',
          isOpened ? className : '',
        ].join(' ')}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  )
}

export default PossibilitiesCard
