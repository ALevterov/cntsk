import { memo } from 'react'
import styles from './SelectItem.module.css'
const SelectItem = ({
  children,
  onChangeSelected = () => {},
  active,
}: {
  children: string
  onChangeSelected?: (selectedItem: string, isActive: boolean) => void
  active: boolean
}) => {
  // const [active, setActive] = useState(initialActive)
  const handleClick = () => {
    onChangeSelected(children, active)
    // setActive(prev => !prev)
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
