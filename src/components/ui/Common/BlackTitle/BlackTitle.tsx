import styles from './BlackTitle.module.css'
const BlackTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.h1}>{children}</h1>
}

export default BlackTitle
