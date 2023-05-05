import styles from './BrandCard.module.css'
const BrandCard = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <div className={styles.container}>
      {children}
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default BrandCard
