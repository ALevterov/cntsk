import Link from 'next/link'
import styles from './WebsiteCard.module.css'
import ArrowMore from '@/icons/ArrowMore'
const WebsiteCard = ({
  text,
  children,
  linkText,
  link,
  titleClass,
  iconClass,
}: {
  text: string
  children: React.ReactNode
  linkText: string
  link: string
  titleClass?: string
  iconClass?: string
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={[styles.title, titleClass ? titleClass : ''].join(' ')}>
          {children}
        </div>
        <h3 className={styles.text}>{text}</h3>
      </div>
      <div className={styles.right}>
        <Link
          target='_blank'
          href={link}
          className={[styles.link, iconClass ? iconClass : ''].join(' ')}
        >
          {linkText}
          <ArrowMore />
        </Link>
      </div>
    </div>
  )
}

export default WebsiteCard
