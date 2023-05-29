import Image from 'next/image'
import styles from './ManagmentCard.module.css'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import ArrowMore from '@/icons/ArrowMore'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const ManagmentCard = ({
  image,
  title,
  description,
  children,
}: {
  image: string
  title: string
  description: string
  children: React.ReactNode
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleCard = () => {
    setIsOpened(prev => !prev)
  }
  const scrollRef = useRef<HTMLDivElement | null>(null)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <img src={image} alt='photo' />
        </div>
        <div className={styles.title}>{title}</div>
        {!isOpened && <div className={styles.description}>{description}</div>}
      </div>
      <div className={styles.bottom}>
        <OverlayScrollbarsComponent>
          <div
            className={[
              styles.content,
              isOpened ? styles.contentOpened : '',
            ].join(' ')}
            ref={scrollRef}
          >
            {children}
          </div>
        </OverlayScrollbarsComponent>
        <button className={styles.btn} onClick={toggleCard}>
          {isOpened ? 'свернуть' : 'подробнее'}
          <div
            className={[
              styles.arrowWrapper,
              isOpened ? styles.btnOpened : '',
            ].join(' ')}
          >
            <ArrowMore />
          </div>
        </button>
      </div>
    </div>
  )
}

export default ManagmentCard
