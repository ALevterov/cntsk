import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './CasesSection.module.css'
import global from '@/styles/global.module.css'
import DraggableLine from '@/components/ui/Sections/CasesSection/DraggableLine/DraggableLine'
import { useEffect, useRef, useState } from 'react'
import CasesItem from '@/components/ui/Sections/CasesSection/CasesItem/CasesItem'
import { itemsBottom, itemsTop } from './CasesItems'
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from 'framer-motion'

function isNumber(number: number | null): number {
  if (number === null) {
    return 0
  } else {
    return number
  }
}

const CasesSection = () => {
  const [offsetX, setOffsetX] = useState<null | number>(0)
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(isNumber(offsetX), physics)
  useEffect(() => {
    spring.set(isNumber(offsetX) * -6)
  }, [offsetX, spring])
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })

  console.log('spring', spring)
  console.log('offsetX', offsetX)

  useEffect(() => {
    console.log('scrollXProgress: ', scrollXProgress)
  }, [scrollXProgress])
  return (
    <div className={styles.section}>
      <div className={global.container}>
        <div className={styles.sectionTop}>
          <BlackTitle color='black'>Кейсы</BlackTitle>
          <DraggableLine offsetX={offsetX} setOffsetX={setOffsetX} />
        </div>
        <motion.section
          className={styles.scrollableBlock}
          ref={ref}
          style={{ x: spring }}
        >
          <div className={styles.cardsTopContainer}>
            {itemsTop.map(item => (
              <CasesItem
                text={item.text}
                year={item.year}
                key={item.text}
                position='top'
              />
            ))}
          </div>
          <div className={styles.mainLine}></div>
          <div className={styles.cardsBottomContainer}>
            {itemsBottom.map(item => (
              <CasesItem
                text={item.text}
                year={item.year}
                key={item.text}
                position='bottom'
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CasesSection
