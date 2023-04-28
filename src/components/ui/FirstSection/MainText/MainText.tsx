import styles from './MainText.module.css'
const MainText = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.text}>{children}</h1>
}

export default MainText
