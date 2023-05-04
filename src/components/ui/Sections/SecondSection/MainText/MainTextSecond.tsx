import styles from './MainText.module.css'

const MainText = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.text}>{children}</div>
}
export default MainText
