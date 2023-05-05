import Image from 'next/image'
import styles from './ManagmentCard.module.css'
import React from 'react'
import { useState } from 'react'
import ArrowMore from '@/icons/ArrowMore'
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
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt='photo' />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div
        className={[styles.content, isOpened ? styles.contentOpened : ''].join(
          ' '
        )}
      >
        {children}
      </div>
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
  )
}

export default ManagmentCard
