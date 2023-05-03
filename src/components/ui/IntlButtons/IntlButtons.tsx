import { useMemo } from 'react'
import styles from './IntlButtons.module.css'
type TActive = 'Ru' | 'En'

const IntlButtons = ({ isActive }: { isActive: TActive }) => {
  const RuClasses = [styles.text]
  const EnClasses = [styles.text]
  if (isActive === 'Ru') {
    RuClasses.push(styles.active)
  }
  if (isActive === 'En') {
    EnClasses.push(styles.active)
  }
  return (
    <div className={styles.container}>
      <span className={RuClasses.join(' ')}>Ru</span> |{' '}
      <span className={EnClasses.join(' ')}>En</span>
    </div>
  )
}

export default IntlButtons
