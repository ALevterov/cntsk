import Link from 'next/link'
import styles from './SocialLink.module.css'
const SocialLink = ({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) => {
  return (
    <Link href={link} className={styles.link}>
      {children}
    </Link>
  )
}

export default SocialLink
