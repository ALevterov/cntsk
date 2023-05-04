import MenuIcon from '@/icons/MenuIcon'
import styles from './MenuButton.module.css'
const MenuButton = () => {
  return (
    <div className={styles.btn}>
      <MenuIcon />
      <span>Меню</span>
    </div>
  )
}

export default MenuButton
