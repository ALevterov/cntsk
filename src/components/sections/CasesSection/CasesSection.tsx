import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './CasesSection.module.css'
import global from '@/styles/global.module.css'
import DraggableLine from '@/components/ui/Sections/CasesSection/DraggableLine/DraggableLine'
import { useEffect, useState } from 'react'
import CasesItem from '@/components/ui/Sections/CasesSection/CasesItem/CasesItem'
import { itemsTop } from './CasesItems'
const CasesSection = () => {
  const [offsetX, setOffsetX] = useState<null | number>(null)
  useEffect(() => {
    console.log(offsetX)
  }, [offsetX])
  return (
    <div className={styles.section}>
      <div className={global.container}>
        <div className={styles.sectionTop}>
          <BlackTitle color='black'>Кейсы</BlackTitle>
          <DraggableLine offsetX={offsetX} setOffsetX={setOffsetX} />
        </div>
        <div className={styles.scrollableBlock}>
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
        </div>
      </div>
    </div>
  )
}

export default CasesSection
