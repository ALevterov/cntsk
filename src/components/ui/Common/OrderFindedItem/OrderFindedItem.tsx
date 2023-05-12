import styles from './OrderFindedItem.module.css'
const OrderFindedItem = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>
}

export default OrderFindedItem
