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
import MenuCloseIcon from '@/icons/MenuCloseIcon'
import { useCallback } from 'react'

// interface TAnchorClickEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {
//   target: {
//     href?: string
//   }
// }

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

  const handleNavigationClick: React.MouseEventHandler<HTMLAnchorElement> =
    useCallback(
      (e: any) => {
        e.preventDefault()
        const match = e.target.href.match(/#[a-z]+/)
        let href: string = ''
        if (match) {
          href = match[0].replace('#', '')
        }
        closeMenu()
        let section = document.getElementById(href)

        setTimeout(() => {
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      },
      [closeMenu]
    )
  const handleOrderBtnClick: React.MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      let href = 'services'
      closeMenu()
      let section = document.getElementById(href)

      setTimeout(() => {
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }, [closeMenu])

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
              <Link
                href={'#today'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                ЦНТСК сегодня
              </Link>
              <Link
                href={'#whywe'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Почему мы?
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link
                href={'#services'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Услуги
              </Link>
              <Link
                href={'#possibilities'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Направления
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link
                href={'#aboutus'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                О компании
              </Link>
              <Link
                href={'#brand'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Клиенты
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link
                href={'#cases'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Кейсы
              </Link>
              <Link
                href={'#managment'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Руководство
              </Link>
            </div>
            <div className={styles.menuListBlock}>
              <Link
                href={'#footer'}
                className={styles.menuListItem}
                onClick={handleNavigationClick}
              >
                Контакты
              </Link>
            </div>
          </div>
          <div className={styles.menuButton} onClick={handleOrderBtnClick}>
            <HeaderButton>Заказать услугу</HeaderButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
