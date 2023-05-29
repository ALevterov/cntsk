import styles from './SimpleTitle.module.css'

type TPosition = 'center' | 'left' | 'right'

const SimpleTitle = ({
  children,
  position,
  className,
}: {
  children: React.ReactNode
  position: TPosition
  className?: string
}) => {
  const classes = [styles.h1, className ? className : '']
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
