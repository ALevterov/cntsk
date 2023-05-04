import styles from './MainTextBordered.module.css'
const MainTextBordered = ({ children }: { children: string }) => {
  return <span className={styles.bordered}>{children}</span>
}

export default MainTextBordered
