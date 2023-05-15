import styles from './CasesItem.module.css'

type TPosition = 'top' | 'bottom'

const CasesItem = ({
  text,
  year,
  position,
}: {
  text: string
  year: string
  position: TPosition
}) => {
  return (
    <div className={styles.container}>
      {position == 'bottom' ? <div className={styles.circle}></div> : null}
      <div
        className={[
          styles.cardContainer,
          position === 'top' ? styles.cardTop : styles.cardBottom,
        ].join(' ')}
      >
        <div className={styles.year}>{year}</div>
        <div className={styles.text}>{text}</div>
      </div>
      {position == 'top' ? <div className={styles.circle}></div> : null}
    </div>
  )
}

export default CasesItem
