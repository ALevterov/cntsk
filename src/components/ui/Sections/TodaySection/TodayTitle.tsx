import styles from './TodayTitle.module.css'
const TodayTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.title}>{children}</h1>
}

export default TodayTitle
