import styles from './SimpleTitle.module.css'

type TPosition = 'center' | 'left' | 'right'

const SimpleTitle = ({
  children,
  position,
}: {
  children: React.ReactNode
  position: TPosition
}) => {
  const classes = [styles.h1]
  if (position === 'center') {
    classes.push(styles.title)
  }
  return (
    <h1 className={classes.join(' ')} style={{ textAlign: position }}>
      {children}
    </h1>
  )
}

export default SimpleTitle
