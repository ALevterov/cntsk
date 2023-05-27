import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './Slider.module.css'
import SliderNextIcon from '@/icons/SliderNextIcon'

const slides = [
  {
    text: `Налаженные рабочие контакты и возможность публикаций в более чем 150 крупнейших международных информационных ресурсах и изданиях, в том числе таких как: Reuters, Bloomberg, The Wall Street Journal, The Washington Post, Le Figaro, The Times, Foreign Policy, Suddeutshe Zeitung, La Republica, Cyprus Mail, New Europe, European Reporter, Brussels Times, Aljazeera, FOX News, Yahoo.`,
    index: '01',
  },
  {
    text: `Пул наиболее авторитетных и качественных российских изданий включая:
		«Комсомольскую правду», «Аргументы и Факты», «Московский комсомолец», «РБК», «Ведомости», «Независимую газету», «Известия»,
		«Российскую газету.`,
    index: '02',
  },
  {
    text: `Общий охват международной аудитории через собственные каналы информации – более 200 миллионов человек`,
    index: '03',
  },
  {
    text: `Собственная сеть блоггеров и стриммеров по всему миру, включая страны Африки и Ближнего Востока`,
    index: '04',
  },
  {
    text: `Возможность создания уникального и качественного контента (видео, аудио, тексты) силами собственных авторов, блогеров, продюсеров на собственной современной производственной базе`,
    index: '05',
  },
  {
    text: `Уникальная команда менеджеров, специалистов, а также более 500 волонтеров, позволяющая проводить информационнные коммуникационные кампании любой сложности (в том числе избирательные кампании, массовые мероприятия, пресс-конференции) не только в регионах России, но в и в других странах мира`,
    index: '06',
  },
  {
    text: `База из 300 российских и иностранных журналистов, признанных экспертов в различных областях, лидеров общественного мнения – которые могут быть интегрированы в повестку Ваших мероприятий и выступлений, в содержание Ваших информационных и рекламных материалов`,
    index: '07',
  },
]

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '">' + '</span>'
    },
  }
  return (
    <Swiper
      rewind={true}
      navigation={{
        nextEl: '.slider-next-btn',
        prevEl: null,
      }}
      pagination={pagination}
      modules={[Pagination, Navigation]}
      className={styles.swiper}
      initialSlide={1}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className={styles.slide} key={i}>
          <div className={styles.slideBgIndex}>{slide.index}</div>
          <div className={styles.sliderInner}>
            <div className={styles.slideText}>{slide.text}</div>
          </div>
        </SwiperSlide>
      ))}
      <div className='slider-next-btn'>
        <SliderNextIcon />
      </div>
    </Swiper>
  )
}

export default Slider
