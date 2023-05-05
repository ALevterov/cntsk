import BlackTitle from '../../Common/BlackTitle/BlackTitle'
import styles from './ManagmentSection.module.css'
import global from '@/styles/global.module.css'
const ManagmentSection = () => {
  return (
    <div className={styles.section}>
      <div className={global.container}>
        <BlackTitle>РУКОВОДСТВО</BlackTitle>
        <div className={styles.cardsContainer}></div>
      </div>
    </div>
  )
}

export default ManagmentSection
