import LogoIcon from '@/icons/LogoIcon'
import styles from './Menu.module.css'
import global from '@/styles/global.module.css'
import IntlButtons from '../IntlButtons/IntlButtons'
import InstaIcon from '@/icons/InstaIcon'
import TgIcon from '@/icons/TgIcon'
import FBIcon from '@/icons/FBIcon'
import VKIcon from '@/icons/VKIcon'
import ColoredIcon from '../ColoredIcon/ColoredIcon'
import HeaderButton from '../Header/HeaderButton'
import Link from 'next/link'
import MenuCloseIcon from '@/icons/menuCloseIcon'
const Menu = ({
  opened,
  closeMenu,
}: {
  opened: boolean
  closeMenu: () => void
}) => {
  const classes = [styles.container]
  if (opened) {
    classes.push(styles.opened)
  }
  return (
    <div className={classes.join(' ')}>
      <div className={[styles.wrapper, global.container].join(' ')}>
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <LogoIcon />
          </div>
          <div className={[styles.headerCenter, styles.desktop].join(' ')}>
            Меню сайта
          </div>
          <div className={styles.headerRight}>
            <div className={[styles.intl, styles.desktop].join(' ')}>
              <IntlButtons isActive='Ru' />
            </div>
            <div className={styles.social}>
              <ColoredIcon>
                <VKIcon />
              </ColoredIcon>
              <ColoredIcon>
                <TgIcon />
              </ColoredIcon>
              <ColoredIcon>
                <InstaIcon />
              </ColoredIcon>
              <ColoredIcon>
                <FBIcon />
              </ColoredIcon>
            </div>
          </div>
        </div>
        <div className={[styles.mobile, styles.mobileHeader].join(' ')}>
          <div className={styles.menuText}>Меню сайта</div>
          <div className={styles.mobileHeaderRight}>
            <div className={styles.intl}>
              <IntlButtons isActive='Ru' />
            </div>
            <div className={styles.btnCloseWrapper} onClick={closeMenu}>
              <MenuCloseIcon />
            </div>
          </div>
        </div>
        <div className={styles.menuBottom}>
          <div className={styles.menuList}>
            <div className={styles.menuListBlock}>
              <Link href={'#'} className={styles.menuListItem}>
                ЦНТСК сегодня
              </Link>
              <Link href={'#'} className={styles.menuListItem}>
                Почему мы?
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link href={'#'} className={styles.menuListItem}>
                Услуги
              </Link>
              <Link href={'#'} className={styles.menuListItem}>
                Направления
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link href={'#'} className={styles.menuListItem}>
                О компании
              </Link>
              <Link href={'#'} className={styles.menuListItem}>
                Клиенты
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link href={'#'} className={styles.menuListItem}>
                Кейсы
              </Link>
              <Link href={'#'} className={styles.menuListItem}>
                Руководство
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link href={'#'} className={styles.menuListItem}>
                Контакты
              </Link>
            </div>
          </div>
          <div className={styles.menuButton}>
            <HeaderButton>Заказать услугу</HeaderButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
