import RunningItemSecond from './RunningItemSecond'
import styles from './RunningStringSecond.module.css'

const items: string[] = [
  'инновационные подходы коммуникациИ и PR',
  'инновационные подходы коммуникациИ и PR',
  'инновационные подходы коммуникациИ и PR',
  'инновационные подходы коммуникациИ и PR',
]

const RunningStringSecond = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {items.map((item, index) => (
            <RunningItemSecond text={item} key={index} />
          ))}
        </div>
        <div className={styles.innerClone}>
          {items.map((item, index) => (
            <RunningItemSecond text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RunningStringSecond
