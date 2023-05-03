import global from '@/styles/global.module.css'
import Header from '../../ui/Header/Header'
import styles from './FirstSection.module.css'
import RunningString from '@/components/ui/RunningString/RunningString'
import MainText from '@/components/ui/FirstSection/MainText/MainText'
import MainTextBordered from '@/components/ui/FirstSection/MainText/MainTextBordered'
import AdditionalText from '@/components/ui/FirstSection/AdditionalText/AdditionalText'
import { useEffect, useRef, useState } from 'react'

const FirstSection = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (sectionRef.current) {
        sectionRef.current.style.transform = `translateY(${
          window.scrollY * -1
        }px)`
      }
    })
  }, [])
  return (
    <div className={styles.section} ref={sectionRef}>
      <Header />
      <div className={[global.container, styles.centralContainer].join(' ')}>
        <div
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            visibility: 'hidden',
          }}
        ></div>
        <AdditionalText>
          центр новых технологий социальных коммуникаций
        </AdditionalText>
        <MainText>
          <>
            <MainTextBordered>НОВАЯ ЭПОХА</MainTextBordered> <br />
            КОММУНИКАЦИЙ
          </>
        </MainText>
      </div>
      <RunningString />
    </div>
  )
}

export default FirstSection
