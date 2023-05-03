import styles from './HeaderButton.module.css'
const HeaderButton = ({ children }: { children: string }) => {
  return <button className={styles.btn}>{children}</button>
}

export default HeaderButton
