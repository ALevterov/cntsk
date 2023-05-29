import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './CasesSection.module.css'
import global from '@/styles/global.module.css'
import DraggableLine from '@/components/ui/Sections/CasesSection/DraggableLine/DraggableLine'
import { useEffect, useRef, useState } from 'react'
import CasesItem from '@/components/ui/Sections/CasesSection/CasesItem/CasesItem'
import { itemsBottom, itemsTop } from './CasesItems'
import { useSpring, motion } from 'framer-motion'

function isNumber(number: number | null): number {
  if (number === null) {
    return 0
  }
  if (number < 0) {
    return -1
  }
  return number
}

function calcStep(step: number, n: number) {
  if (step === 130) {
    return step * n - 2
  }
  if (n === 3) {
    return step * n - 1
  }
  return step * n - 2
}

const CasesSection = () => {
  const [offsetX, setOffsetX] = useState<null | number>(0)
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(isNumber(offsetX), physics)
  const prevOffset = useRef(offsetX)
  useEffect(() => {
    let step: number = 130
    if (window.innerWidth > 1440) {
      step = 130
    }
    if (window.innerWidth <= 1440) {
      step = 89
    }

    if (isNumber(offsetX) <= calcStep(step, 3)) {
      spring.set(isNumber(offsetX) * -6)
    }
    if (
      isNumber(offsetX) > calcStep(step, 3) &&
      isNumber(offsetX) <= calcStep(step, 4)
    ) {
      spring.set(isNumber(offsetX) * -8)
    }
    if (
      isNumber(offsetX) > calcStep(step, 4) &&
      isNumber(offsetX) <= calcStep(step, 5)
    ) {
      spring.set(calcStep(step, 4) * -6 + isNumber(offsetX) * -2.5)
      if (prevOffset.current) {
        prevOffset.current = calcStep(step, 4) * -6 + isNumber(offsetX) * -2.5
      }
    }
    if (
      isNumber(offsetX) > calcStep(step, 5) &&
      isNumber(offsetX) <= calcStep(step, 6)
    ) {
      spring.set(
        calcStep(step, 4) * -6 +
          isNumber(offsetX) * -2.5 +
          isNumber(offsetX) * -0.5
      )
    }
    if (isNumber(offsetX) > calcStep(step, 6)) {
      spring.set(
        calcStep(step, 4) * -6 +
          calcStep(step, 6) * -2.5 +
          calcStep(step, 6) * -0.5
      )
    }
  }, [offsetX, spring])
  return (
    <div className={styles.section}>
      <div className={global.container}>
        <div className={styles.sectionTop}>
          <BlackTitle color='black'>Кейсы</BlackTitle>
          <DraggableLine offsetX={offsetX} setOffsetX={setOffsetX} />
        </div>
        <motion.section
          className={styles.scrollableBlock}
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
