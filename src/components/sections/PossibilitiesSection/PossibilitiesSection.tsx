import SimpleTitle from '@/components/ui/Common/SimpleTitle/SimpleTitle'
import styles from './PossibilitiesSection.module.css'
import global from '@/styles/global.module.css'
import img1 from '@/assets/CardSection/1.png'
import PossibilitiesCard from '@/components/ui/Sections/PossibilitiesSection/PossibilitiesCard/PossibilitiesCard'

type TCard = {
  title: string
  image: string
  children: React.ReactNode
}

const cards = [
  {
    title: '',
    image: img1.src,
    children: (
      <>
        <p>
          создание и функционирование политических общественных региональных и
          федеральных избирательных кампаний;
        </p>
        <p>
          продвижение политических проектов и инициатив; поддержка конкретных
          политиков и общественных деятелей;
        </p>
        <p>
          формирование аналитических материалов и проектов для органов
          Законодательной и Исполнительной власти;
        </p>
        <p>имиджевое сопровождение в контексте политической повестки</p>
      </>
    ),
  },
]

const PossibilitiesSection = () => {
  return (
    <div className={styles.section}>
      <div className={global.container}>
        <SimpleTitle position='center'>
          Возможные направления применения возможностей ЦНТСК
        </SimpleTitle>
        <div className={styles.cardsWrapper}>
          <div className={styles.cardContainer}>
            <PossibilitiesCard
              className={styles.card1}
              title='Политические проекты'
              image={img1.src}
            >
              <>
                <p>
                  создание и функционирование политических общественных
                  региональных и федеральных избирательных кампаний;
                </p>
                <p>
                  продвижение политических проектов и инициатив; поддержка
                  конкретных политиков и общественных деятелей;
                </p>
                <p>
                  формирование аналитических материалов и проектов для органов
                  Законодательной и Исполнительной власти;
                </p>
                <p>имиджевое сопровождение в контексте политической повестки</p>
              </>
            </PossibilitiesCard>
            <PossibilitiesCard
              className={styles.card2}
              title='Спортивные проекты'
              image={img1.src}
            >
              <>
                <p>российские и международные соревнования;</p>
                <p>
                  деятельность федераций, спортивный менеджмент, спортивное
                  промоутерство;
                </p>
                <p>продвижение проектов и инициатив в области спорта;</p>
                <p>
                  информационная поддержка проектов и конкретных спортсменов и
                  спортивных функционеров.
                </p>
              </>
            </PossibilitiesCard>
          </div>
          <div className={styles.cardContainer}>
            <PossibilitiesCard
              title='Работа с общественным мнением'
              image={img1.src}
              className={styles.card3}
            >
              <>
                <p>привлечение лидеров общественного мнения;</p>
                <p>
                  выработка и реализация собственной информационной стратегии и
                  информационной политики;
                </p>
                <p>
                  влияние на информационную и общественную повестку через
                  российские и зарубежные СМИ.
                </p>
              </>
            </PossibilitiesCard>
            <PossibilitiesCard
              title='Международные
							отношения'
              image={img1.src}
              className={styles.card4}
            >
              <>
                <p>
                  проведение информационных и PR- кампаний в зарубежных медиа;
                  привлечение пула иностранных экспертов к поддержке и
                  продвижению инициатив и проектов Холдинга;
                </p>
                <p>
                  подготовка международного общественного мнения или конкретных
                  сообществ к обсуждению определенных инициатив или проектов
                  экономического или дипломатического характера.
                </p>
              </>
            </PossibilitiesCard>
          </div>
          <div className={styles.cardContainer}>
            <PossibilitiesCard
              title='Вопросы влияния внутри страны'
              image={img1.src}
              className={styles.card5}
            >
              <>
                <p>
                  создание пула изданий, журналистов и экспертов, которые будут
                  продвигать интересы Организации и ее руководства (формальных и
                  неформальных лидеров);
                </p>
                <p>устранение из информационного поля негатива;</p>
                <p>информационное давление на оппонентов;</p>
                <p>
                  развитие собственных каналов коммуникаций с различными
                  аудиториями и развитие собственных информационных ресурсов.
                </p>
              </>
            </PossibilitiesCard>
            <PossibilitiesCard
              title='Создание мультимедийного контента'
              image={img1.src}
              className={styles.card6}
            >
              <></>
            </PossibilitiesCard>
          </div>
          <div className={styles.cardContainer}>
            <PossibilitiesCard
              title='Реализация национальных проектов'
              image={img1.src}
              className={styles.card7}
            >
              <>
                <p>
                  Реализация образовательных и просветительских проектов и
                  инициатив в сфере воспитания подрастающего поколения,
                  сохранения исторических и культурных ценностей народов России,
                  воспитания подрастающего поколения, правовой грамотности,
                  экологии, народной дипломатии, государственной социальной
                  политике
                </p>
              </>
            </PossibilitiesCard>
            <PossibilitiesCard
              title='Социальные и политические исследования'
              image={img1.src}
              className={styles.card8}
            >
              <></>
            </PossibilitiesCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PossibilitiesSection
