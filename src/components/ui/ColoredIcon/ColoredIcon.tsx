import styles from './ColoredIcon.module.css'
const ColoredIcon = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.colored}>{children}</div>
}

export default ColoredIcon
