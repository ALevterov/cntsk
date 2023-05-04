import ArrowMore from '@/icons/ArrowMore'
import styles from './PossibilitiesBtnMore.module.css'
import { Dispatch, SetStateAction } from 'react'
const PossibilitiesBtnMore = ({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean
  setIsOpened: Dispatch<SetStateAction<boolean>>
}) => {
  const arrowClasses = [styles.arrowContainer]
  const toggleOpened = () => {
    setIsOpened(prev => !prev)
  }
  if (isOpened) {
    arrowClasses.push(styles.rotated)
  }
  return (
    <button className={styles.btn} onClick={toggleOpened}>
      {isOpened ? 'свернуть' : 'развернуть'}
      <div className={arrowClasses.join(' ')}>
        <ArrowMore />
      </div>
    </button>
  )
}

export default PossibilitiesBtnMore
