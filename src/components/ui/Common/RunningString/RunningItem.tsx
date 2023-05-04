import styles from './RunningItem.module.css'
const RunningItem = ({ text }: { text: string }) => {
  return <div className={styles.item}>{text}</div>
}

export default RunningItem
