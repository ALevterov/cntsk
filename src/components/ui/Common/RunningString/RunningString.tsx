import { useEffect, useState } from 'react'
import RunningItem from './RunningItem'
import styles from './RunningString.module.css'

const RunningString = ({
  items,
  containerClassName = '',
}: {
  items: string[]
  containerClassName?: string
}) => {
  return (
    <div className={[styles.container, containerClassName].join(' ')}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {items.map((item, index) => (
            <RunningItem text={item} key={index} />
          ))}
        </div>
        <div className={styles.innerClone}>
          {items.map((item, index) => (
            <RunningItem text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RunningString
