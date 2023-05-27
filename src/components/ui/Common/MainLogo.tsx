import LogoIcon from '@/icons/LogoIcon'
import Link from 'next/link'
import styles from './MainLogo.module.css'
const MainLogo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <LogoIcon />
    </Link>
  )
}

export default MainLogo
