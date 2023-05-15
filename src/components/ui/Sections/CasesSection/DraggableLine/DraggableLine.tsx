import styles from './DraggableLine.module.css'
import { motion, animate } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface ClickEvent extends React.MouseEvent<HTMLDivElement> {
  target: HTMLDivElement
}

const DraggableLine = ({
  offsetX,
  setOffsetX,
}: {
  offsetX: null | number
  setOffsetX: Dispatch<SetStateAction<null | number>>
}) => {
  const initialPoint = useRef<null | number>(null)
  const mainLineRef = useRef<null | HTMLDivElement>(null)
  const pointRef = useRef<null | HTMLDivElement>(null)
  const lastPoint = useRef<null | HTMLDivElement>(null)
  const secondPoint = useRef<null | HTMLDivElement>(null)
  // const [offsetX, setOffsetX] = useState<null | number>(null)
  const [constraintRight, setConstraintRight] = useState<number>(906)

  useEffect(() => {
    if (lastPoint.current) {
      setConstraintRight(lastPoint.current.offsetLeft)
    }
    if (secondPoint.current) {
      animate('#draggable-point', {
        x: [offsetX, secondPoint.current.offsetLeft],
      })
      setOffsetX(secondPoint.current.offsetLeft)
    }
    if (pointRef.current) {
      pointRef.current.style.top = '-9px'
    }
  }, [])

  useEffect(() => {
    if (mainLineRef.current) {
      const nodesArray = []
      for (let i = 1; i < 8; i++) {
        nodesArray.push(mainLineRef.current.childNodes[i])
      }
      if (offsetX !== null) {
        nodesArray.forEach((point: any) => {
          if (offsetX >= point.offsetLeft) {
            point.classList.add(styles.pointActive)
          }
          if (offsetX < point.offsetLeft) {
            point.classList.remove(styles.pointActive)
          }
        })
      }
    }
  }, [offsetX])

  const dragHandler = (data: any, info: any) => {
    if (initialPoint.current === null && secondPoint.current) {
      initialPoint.current =
        info.point.x - info.offset.x - secondPoint.current.offsetLeft
      if (info.point.x - initialPoint.current >= 0) {
        setOffsetX(info.point.x - initialPoint.current)
      }
      if (info.point.x - initialPoint.current < 0) {
        setOffsetX(-1)
      }
      if (info.point.x - initialPoint.current > constraintRight) {
        setOffsetX(constraintRight)
      }
    }

    if (initialPoint.current && secondPoint.current) {
      if (info.point.x - initialPoint.current >= 0) {
        setOffsetX(info.point.x - initialPoint.current)
      }
      if (info.point.x - initialPoint.current < 0) {
        setOffsetX(-1)
      }
      if (info.point.x - initialPoint.current > constraintRight) {
        setOffsetX(constraintRight)
      }
    }
  }
  const handleYearClick = (e: ClickEvent) => {
    const endPoint: number = e.target.offsetLeft
    animate('#draggable-point', { x: [offsetX, endPoint] })
    if (endPoint >= 0) {
      setOffsetX(endPoint)
    }
    if (endPoint < 0) {
      setOffsetX(-1)
    }
    if (endPoint > constraintRight) {
      setOffsetX(constraintRight)
    }
  }
  const onDragEnd = () => {
    animate('#draggable-point', {
      x: [offsetX],
    })
  }
  return (
    <div>
      <div className={styles.line} ref={mainLineRef}>
        <div
          onClick={handleYearClick}
          className={[styles.firstPoint, styles.pointActive].join(' ')}
        ></div>
        <div onClick={handleYearClick} ref={secondPoint}></div>
        <div onClick={handleYearClick}></div>
        <div onClick={handleYearClick}></div>
        <div onClick={handleYearClick}></div>
        <div onClick={handleYearClick}></div>
        <div onClick={handleYearClick}></div>
        <div
          onClick={handleYearClick}
          ref={lastPoint}
          className={styles.lastPoint}
        ></div>
        <div
          className={styles.progressLine}
          style={{ width: `${offsetX ? offsetX + 10 : 0}px` }}
        ></div>
        <motion.div
          id='draggable-point'
          className={styles.draggeblePoint}
          drag='x'
          onDrag={dragHandler}
          onDragEnd={onDragEnd}
          ref={pointRef}
          whileDrag={{ transition: { duration: 2 } }}
          dragConstraints={{ left: -1, right: constraintRight }}
          dragElastic={0.01}
        ></motion.div>
      </div>
      <div className={styles.years}>
        <div>2023 г.</div>
        <div>2022 г.</div>
        <div>2021 г.</div>
        <div>2020 г.</div>
        <div>2019 г.</div>
        <div>2018 г.</div>
        <div>2017 г.</div>
        <div>2016 г.</div>
      </div>
    </div>
  )
}

export default DraggableLine
