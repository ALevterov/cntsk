import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './Slider.module.css'
import SliderNextIcon from '@/icons/SliderNextIcon'

const slides = [
  {
    text: 'Налаженные рабочие контакты и возможность публикаций в более чем 150 крупнейших международных информационных ресурсах и изданиях, в том числе таких как: Reuters, Bloomberg, The Wall Street Journal, The Washington Post, Le Figaro, The Times, Foreign Policy, Suddeutshe Zeitung, La Republica, Cyprus Mail, New Europe, European Reporter, Brussels Times, Aljazeera, FOX News, Yahoo.',
    index: '01',
  },
  {
    text: 'Налаженные рабочие контакты и возможность публикаций в более чем 150 крупнейших международных информационных ресурсах и изданиях, в том числе таких как: Reuters, Bloomberg, The Wall Street Journal, The Washington Post, Le Figaro, The Times, Foreign Policy, Suddeutshe Zeitung, La Republica, Cyprus Mail, New Europe, European Reporter, Brussels Times, Aljazeera, FOX News, Yahoo.',
    index: '02',
  },
  {
    text: 'Налаженные рабочие контакты и возможность публикаций в более чем 150 крупнейших международных информационных ресурсах и изданиях, в том числе таких как: Reuters, Bloomberg, The Wall Street Journal, The Washington Post, Le Figaro, The Times, Foreign Policy, Suddeutshe Zeitung, La Republica, Cyprus Mail, New Europe, European Reporter, Brussels Times, Aljazeera, FOX News, Yahoo.',
    index: '03',
  },
  {
    text: 'Налаженные рабочие контакты и возможность публикаций в более чем 150 крупнейших международных информационных ресурсах и изданиях, в том числе таких как: Reuters, Bloomberg, The Wall Street Journal, The Washington Post, Le Figaro, The Times, Foreign Policy, Suddeutshe Zeitung, La Republica, Cyprus Mail, New Europe, European Reporter, Brussels Times, Aljazeera, FOX News, Yahoo.',
    index: '04',
  },
  {
    text: 'Налаженные рабочие контакты и возможность публикаций в более чем 150 крупнейших международных информационных ресурсах и изданиях, в том числе таких как: Reuters, Bloomberg, The Wall Street Journal, The Washington Post, Le Figaro, The Times, Foreign Policy, Suddeutshe Zeitung, La Republica, Cyprus Mail, New Europe, European Reporter, Brussels Times, Aljazeera, FOX News, Yahoo.',
    index: '05',
  },
]

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      console.log(index, className)
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
      // navigation={true}
      pagination={pagination}
      modules={[Pagination, Navigation]}
      className={styles.swiper}
      onSlideChange={index => console.log(index)}
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
