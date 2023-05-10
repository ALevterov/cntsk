import WebsiteCard from '@/components/ui/Sections/AboutSection/WebsiteCard'
import styles from './AboutSection.module.css'
import global from '@/styles/global.module.css'
import WSIcon from '@/icons/WSIcon'
import ASCIcon from '@/icons/ASCIcon'
import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
const AboutSection = () => {
  return (
    <div className={styles.section}>
      <div className={[global.container].join(' ')}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentRight}>
            <div className={styles.text}>
              <p>
                <span>Центр Новых Технологий Социальный Коммуникаций</span>
                (ЦНТСК) – проект, возникший в результате слияния медиа-агентства{' '}
                <span>
                  Will Star и Агентства Стратегических Коммуникаций (АСК).
                </span>
              </p>
              <p>
                Обе компании, входящие в проект,{' '}
                <span>сохранили свои уникальные бренды</span> и основной
                функционал как самостоятельные структуры. Таким образом, новая
                компания, образованная в результате объединения WillStar и АСК,
                существенно расширяет свои компетенции и возможности.
              </p>
            </div>
            <BlackTitle>о компании</BlackTitle>
          </div>
          <div className={styles.contentLeft}>
            <h1 className={styles.mainText}>ЦНТСК</h1>
            <WebsiteCard
              text='Медиа-агентство Will Star, известное главным образом благодаря работе с популярными блогерами и продюсированию рекламных и развлекательных проектов с их участием, на новом этапе развития делает ставку на производство мультимедийного контента.'
              link='https://willstar.ru'
              linkText='сайт willstar'
              titleClass={styles.cardTitle}
              iconClass={styles.iconClass}
            >
              <WSIcon />
            </WebsiteCard>
            <WebsiteCard
              text='Агентство Стратегических Коммуникаций вошло в состав учредителей новой структуры, передав ей в том числе свою сеть зарубежных информационных ресурсов, а также креативное подразделение компании и production (на базе студии Х-Soul, которую АСК приобрело в 2022 году).'
              link='https://strategycom.info'
              linkText='сайт ASC'
            >
              <ASCIcon />
            </WebsiteCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
