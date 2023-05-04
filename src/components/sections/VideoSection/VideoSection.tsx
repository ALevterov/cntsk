import styles from './VideoSection.module.css'
import img1 from '../../../assets/VideoSection/1.png'
import img2 from '../../../assets/VideoSection/2.png'
import img3 from '../../../assets/VideoSection/3.png'
import RunningString from '@/components/ui/Common/RunningString/RunningString'
const items: string[] = [
  'Информация. Доверие. Результаты',
  'Информация. Доверие. Результаты',
  'Информация. Доверие. Результаты',
  'Информация. Доверие. Результаты',
  'Информация. Доверие. Результаты',
]
const VideoSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src={img1.src} alt='image' />
          <div className={styles.itemContent}>
            <h2 className={styles.itemTop}>
              Мы бережем время заказчиков и не тратим его на бессмысленные
              совещания и встречи
            </h2>
            <div className={styles.itemBottom}>
              Обычно, обратившись к нам, заказчик сразу получает алгоритм
              решения своего вопроса. Затем заказчик контролирует и корректирует
              нашу работу, используя современные средства коммуникации и связи,
              а также сервисы удаленного контроля задач, поручений, сроков и
              расходования бюджетов.
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={img2.src} alt='image' />
          <div className={styles.itemContent}>
            <h2 className={styles.itemTop}>
              Мы не раздуваем бюджеты, не включаем в них откаты, взятки, риски
              или суммы посредников
            </h2>
            <div className={styles.itemBottom}>
              Заказчик получает полную смету с точностью до копейки до начала
              работ, и может ее корректировать, понимая, на что идут его деньги.
              Наше агентское вознаграждение за пределами расходной сметы и
              остается неизменным в ходе проекта.
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={img3.src} alt='image' />
          <div className={styles.itemContent}>
            <h2 className={styles.itemTop}>
              Возможности ЦНТСК позволяют решить в одном месте все вопросы и
              проблемы
            </h2>
            <div className={styles.itemBottom}>
              ЦНТСК решает все вопросы и проблемы связанные с информационной
              активностью, публичным имиджем, коммуникацией, сотрудничеством со
              СМИ и работой в соцсетях, с которыми сталкиваются представители
              бизнеса, государственные чиновники, публичные политики и
              руководители корпораций.
            </div>
          </div>
        </div>
      </div>
      <RunningString
        items={items}
        containerClassName={styles.runningContainer}
      />
    </div>
  )
}

export default VideoSection
