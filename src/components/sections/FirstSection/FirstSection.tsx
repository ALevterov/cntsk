import global from '@/styles/global.module.css'
import styles from './FirstSection.module.css'
import { useEffect, useRef, useState } from 'react'
import Header from '@/components/ui/Common/Header/Header'
import AdditionalText from '@/components/ui/Sections/FirstSection/AdditionalText/AdditionalText'
import MainText from '@/components/ui/Sections/FirstSection/MainText/MainText'
import MainTextBordered from '@/components/ui/Sections/FirstSection/MainText/MainTextBordered'
import RunningString from '@/components/ui/Common/RunningString/RunningString'
const items: string[] = [
  'инновационные подходы коммуникации и PR',
  'инновационные подходы коммуникации и PR',
  'инновационные подходы коммуникации и PR',
  'инновационные подходы коммуникации и PR',
]
const FirstSection = () => {
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
        <div className={styles.hiddenBlock}></div>
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
      <RunningString items={items} />
    </div>
  )
}

export default FirstSection
