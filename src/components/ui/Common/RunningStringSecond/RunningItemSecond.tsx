import styles from './RunningItemSecond.module.css'
const RunningItemSecond = ({ text }: { text: string }) => {
  return <div className={styles.item}>{text}</div>
}

export default RunningItemSecond
