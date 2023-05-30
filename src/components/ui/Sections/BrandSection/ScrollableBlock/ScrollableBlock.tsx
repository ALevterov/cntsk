import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  motion,
} from 'framer-motion'
import styles from './ScrollableBlock.module.css'
import { useRef } from 'react'
import { wrap } from '@motionone/utils'
const ScrollableBlock = ({
  nodesArray,
  baseVelocity,
}: {
  nodesArray: React.ReactNode[]
  baseVelocity: number
}) => {
  const baseX = useMotionValue(0)

  const x = useTransform(baseX, v => {
    return `${wrap(10, -75, v)}%`
  })

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    moveBy += directionFactor.current * moveBy

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={styles.parallax}>
      <motion.div
        className={styles.scroller}
        style={{ x }}
        initial='hidden'
        whileInView='visible'
      >
        {nodesArray.map(node => node)}
      </motion.div>
    </div>
  )
}

export default ScrollableBlock
