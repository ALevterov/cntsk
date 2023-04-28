import RunningItem from './RunningItem'
import styles from './RunningString.module.css'

const items: string[] = [
  'инновационные подходы коммуникациИ и PR',
  'инновационные подходы коммуникациИ и PR',
  'инновационные подходы коммуникациИ и PR',
  'инновационные подходы коммуникациИ и PR',
]

const RunningString = () => {
  return (
    <div className={styles.container}>
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
