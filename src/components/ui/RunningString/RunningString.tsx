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
  // const [visibility, setVisibility] = useState<string | undefined>(
  //   'translate(120%, 0)'
  // )
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisibility(undefined)
  //   }, 6000)
  // }, [])
  return (
    <div className={[styles.container, containerClassName].join(' ')}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {items.map((item, index) => (
            <RunningItem text={item} key={index} />
          ))}
        </div>
        <div
          className={styles.innerClone}
          // style={{
          //   transform: visibility,
          // }}
        >
          {items.map((item, index) => (
            <RunningItem text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RunningString
