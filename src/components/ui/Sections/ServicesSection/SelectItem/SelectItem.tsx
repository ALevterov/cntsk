import { memo, useState } from 'react'
import styles from './SelectItem.module.css'
const SelectItem = ({
  children,
  onChangeSelected,
}: {
  children: string
  onChangeSelected: (selectedItem: string, isActive: boolean) => void
}) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    onChangeSelected(children, active)
    setActive(prev => !prev)
  }
  return (
    <div
      onClick={handleClick}
      className={[styles.item, active ? styles.active : ''].join(' ')}
    >
      {children}
    </div>
  )
}

export default memo(SelectItem)
