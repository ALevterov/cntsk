import styles from './BlackTitle.module.css'
const BlackTitle = ({
  children,
  color = 'black',
  className,
}: {
  children: React.ReactNode
  color?: 'black' | 'white'
  className?: string
}) => {
  return (
    <h1
      className={[
        styles.h1,
        color === 'black' ? styles.black : styles.white,
        className,
      ].join(' ')}
    >
      {children}
    </h1>
  )
}

export default BlackTitle
