import styles from './OrderBtn.module.css'
const OrderBtn = ({
  children,
  active,
}: {
  children: React.ReactNode
  active: boolean
}) => {
  return (
    <button
      className={[styles.btn, active ? styles.active : ''].join(' ')}
      disabled={active}
    >
      {children}
    </button>
  )
}

export default OrderBtn
