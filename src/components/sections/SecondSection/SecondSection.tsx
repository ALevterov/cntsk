import global from '@/styles/global.module.css'
import styles from './SecondSection.module.css'
import img1 from '@/assets/secondSection/1.png'
import img2 from '@/assets/secondSection/2.png'
import img3 from '@/assets/secondSection/3.png'
import img4 from '@/assets/secondSection/4.png'
import RunningStringSecond from '@/components/ui/Common/RunningStringSecond/RunningStringSecond'
import MainText from '@/components/ui/Sections/SecondSection/MainText/MainTextSecond'
import CardAdvantages from '@/components/ui/Sections/SecondSection/CardAdvantages/CardAdvantages'
import Header from '@/components/ui/Common/Header/Header'

type TCard = { img: string; text: string }

const cards: TCard[] = [
  {
    img: img1.src,
    text: 'Прозрачное ценообразование и подробная отчетность',
  },
  {
    img: img2.src,
    text: 'Ясные и эффективные алгоритмы решения задач Заказчика',
  },
  {
    img: img3.src,
    text: 'Простые правила взаимодействия с Заказчиком, без посредников и перекупщиков',
  },
  {
    img: img4.src,
    text: 'Низкие расценки на аналогичные услуги и опции на российском рынке',
  },
]

const SecondSection = () => {
  return (
    <div className={styles.section} id='second'>
      <video
        className={styles.bgVideo}
        src={require('../../../assets/secondSection/second-background.webm')}
        autoPlay
        muted
        loop
      />
      <div className={[global.container, styles.container].join(' ')}>
        <div className={styles.vertical}>
          <h1 className={styles.mainText}>ЦНТСК</h1>
          <RunningStringSecond />
        </div>
        <Header className={styles.mobileHeader} />
        <MainText>
          <p>
            <strong>
              ЦНТСК - это коммуникационное агентство нового поколения,{' '}
            </strong>
            удовлетворяющее все актуальные потребности своих клиентов в области
            собственной информационной политики и информационной активности,
            публичного имиджа, коммуникации с различными аудиториями,
            профилактики негативных информационных воздействий, создания и
            управления собственными информационными повестками и каналами
            распространения информации.
          </p>
          <p>
            В отличие от устаревших PR-агентств и консалтинговых монстров,
            занимающихся манипуляциями, обманом клиентов и немыслимым
            раздуванием бюджетов,{' '}
            <strong>
              ЦНТСК исповедует и реализует на практике совершенно новую
              философию работы в области коммуникаций.
            </strong>
          </p>
        </MainText>
        <div className={styles.cardsContainer}>
          {cards.map(card => (
            <CardAdvantages text={card.text} img={card.img} key={card.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondSection
