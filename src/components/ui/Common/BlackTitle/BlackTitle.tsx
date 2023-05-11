import styles from './BlackTitle.module.css'
const BlackTitle = ({
  children,
  color = 'black',
}: {
  children: React.ReactNode
  color?: 'black' | 'white'
}) => {
  return (
    <h1
      className={[
        styles.h1,
        color === 'black' ? styles.black : styles.white,
      ].join(' ')}
    >
      {children}
    </h1>
  )
}

export default BlackTitle
