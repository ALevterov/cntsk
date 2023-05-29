import global from '@/styles/global.module.css'
import styles from './Header.module.css'
import SocialLink from '../SociaLink'
import InstaIcon from '@/icons/InstaIcon'
import FBIcon from '@/icons/FBIcon'
import TgIcon from '@/icons/TgIcon'
import MainLogo from '../MainLogo'
import VKIcon from '@/icons/VKIcon'
const Header = ({ className }: { className?: string }) => {
  return (
    <div className={[global.container, className].join(' ')}>
      <div className={[styles.headerWrapper].join(' ')}>
        <div className={styles.headerLeft}>
          <MainLogo />
        </div>
        <div className={styles.headerRight}>
          <SocialLink link={'https://vk.com'}>
            <VKIcon />
          </SocialLink>
          <SocialLink link={'https://telegram.org'}>
            <TgIcon />
          </SocialLink>
          <SocialLink link={'https://instagram.org'}>
            <InstaIcon />
          </SocialLink>
          <SocialLink link={'https://facebook.com'}>
            <FBIcon />
          </SocialLink>
        </div>
      </div>
    </div>
  )
}

export default Header
