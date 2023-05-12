import Map, { ICoords } from '../Map/Map'
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
  coords: ICoords
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.contacts}>{children}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.mapWrapper}>
          <Map coords={coords} />
        </div>
      </div>
    </div>
  )
}

export default MapItem
