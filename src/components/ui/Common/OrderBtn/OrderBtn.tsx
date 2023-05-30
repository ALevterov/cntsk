import styles from './OrderBtn.module.css'
const OrderBtn = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) => {
  return (
    <button
      className={[styles.btn, active ? styles.active : ''].join(' ')}
      disabled={!active}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default OrderBtn
