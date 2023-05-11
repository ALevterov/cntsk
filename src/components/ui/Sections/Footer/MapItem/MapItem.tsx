import { Map } from '../Map/Map'
import styles from './MapItem.module.css'
const MapItem = ({
  title,
  children,
  id,
  coords,
}: {
  title: string
  children: React.ReactNode
  id: string
  coords: { x: number; y: number }
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.contacts}>{children}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.mapWrapper}>
          <Map id={id} coords={coords} />
        </div>
      </div>
    </div>
  )
}

export default MapItem
