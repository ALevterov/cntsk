import Image from 'next/image'
import styles from './CardAdvantages.module.css'
const CardAdvantages = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className={styles.cardOuter}>
      <div className={styles.imgContainer}>
        <Image src={img} alt='image' className={styles.cardImage} fill />
      </div>
      <div className={styles.cardText}>{text}</div>
    </div>
  )
}

export default CardAdvantages
