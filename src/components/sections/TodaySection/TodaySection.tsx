import global from '@/styles/global.module.css'
import styles from './TodaySection.module.css'
import TodayTitle from '@/components/ui/Sections/TodaySection/TodayTitle'
import Slider from '@/components/ui/Common/Slider/Slider'
const TodaySection = () => {
  return (
    <div className={styles.section} id='today'>
      <div className={styles.containerTop}>
        <div className={styles.topLeft}>
          <TodayTitle>
            Что такое <br />
            <span className={styles.bordered}>ЦНТСК</span> <br />
            сегодня
          </TodayTitle>
        </div>
        <div className={styles.topRight}>
          <div className={styles.slider}>
            <Slider />
          </div>
        </div>
      </div>
      <div className={styles.containerBottom} id='whywe'>
        <h2 className={styles.bottomText}>
          Почему те, кто ценит время, деньги и нацелен на результат выбирают
          ЦНТСК, а не устаревшие громоздкие структуры?
        </h2>
      </div>
    </div>
  )
}

export default TodaySection
