import SimpleTitle from '@/components/ui/Common/SimpleTitle/SimpleTitle'
import styles from './BrandSection.module.css'
import global from '@/styles/global.module.css'
import BrandCard from '@/components/ui/Sections/BrandSection/BrandCard'
import VKLogo from '@/icons/VKLogo'
import SberLogo from '@/icons/SberLogo'
import TntLogo from '@/icons/TntLogo'
import GoldAppleLogo from '@/icons/GoldAppleLogo'
import DodoLogo from '@/icons/DodoLogo'
import MetroLogo from '../../../icons/MetroLogo'
import NiveaLogo from '@/icons/NiveaLogo'
import DGLogo from '@/icons/DGLogo'
import OrbitLogo from '@/icons/OrbitLogo'
import GShockLogo from '@/icons/GShockLogo'
import LGLogo from '@/icons/LGLogo'
import GQLogo from '@/icons/GQLogo'
import ScrollableBlock from '@/components/ui/Sections/BrandSection/ScrollableBlock/ScrollableBlock'
import { useEffect, useState } from 'react'
import SecondSberLogo from '@/icons/SecondSberLogo'
const BrandSection = () => {
  const [carouselVisible, setCarouselVisible] = useState(true)
  useEffect(() => {
    if (window.innerWidth > 768) {
      setCarouselVisible(false)
    } else {
      setCarouselVisible(true)
    }
  }, [])
  return (
    <div className={styles.section} id='brand'>
      <div className={global.container}>
        <SimpleTitle position='center'>
          Бренды, с которыми мы работали:
        </SimpleTitle>
        <div className={styles.cardsContainer}>
          <BrandCard title='/Вконтакте'>
            <VKLogo />
          </BrandCard>
          <BrandCard title='/Сбер'>
            <SberLogo />
          </BrandCard>
          <BrandCard title='/Телеканал ТНТ'>
            <TntLogo />
          </BrandCard>
          <BrandCard title='/Золотое яблоко'>
            <GoldAppleLogo />
          </BrandCard>
          <BrandCard title='/ДоДо пицца'>
            <DodoLogo />
          </BrandCard>
          <BrandCard title='/Metro Cash and Carry'>
            <MetroLogo />
          </BrandCard>

          <BrandCard title='/Nivea'>
            <NiveaLogo />
          </BrandCard>
          <BrandCard title='/Dolce&Gabanna'>
            <DGLogo />
          </BrandCard>
          <BrandCard title='/Orbit'>
            <OrbitLogo />
          </BrandCard>

          <BrandCard title='/G-Shock'>
            <GShockLogo />
          </BrandCard>
          <BrandCard title='/LG'>
            <LGLogo />
          </BrandCard>
          <BrandCard title='/GQ'>
            <GQLogo />
          </BrandCard>
        </div>

        {carouselVisible && (
          <div className={styles.mobileCarousel}>
            <ScrollableBlock
              baseVelocity={-5}
              nodesArray={[
                <BrandCard title='/Вконтакте' key={'/Вконтакте'}>
                  <VKLogo />
                </BrandCard>,
                <BrandCard title='/Сбер' key={'/Сбер'}>
                  <SecondSberLogo />
                </BrandCard>,
                <BrandCard title='/Телеканал ТНТ' key={'/Телеканал ТНТ'}>
                  <TntLogo />
                </BrandCard>,
                <BrandCard title='/Золотое яблоко' key={'/Золотое яблоко'}>
                  <GoldAppleLogo />
                </BrandCard>,
                <BrandCard title='/ДоДо пицца' key={'/ДоДо пицца'}>
                  <DodoLogo />
                </BrandCard>,
                <BrandCard
                  title='/Metro Cash and Carry'
                  key={'/Metro Cash and Carry'}
                >
                  <MetroLogo />
                </BrandCard>,
              ]}
            />
            <ScrollableBlock
              baseVelocity={5}
              nodesArray={[
                <BrandCard title='/Nivea' key='/Nivea'>
                  <NiveaLogo />
                </BrandCard>,
                <BrandCard title='/Dolce&Gabanna' key='/Dolce&Gabanna'>
                  <DGLogo />
                </BrandCard>,
                <BrandCard title='/Orbit' key='/Orbit'>
                  <OrbitLogo />
                </BrandCard>,
                <BrandCard title='/G-Shock' key='/G-Shock'>
                  <GShockLogo />
                </BrandCard>,
                <BrandCard title='/LG' key='/LG'>
                  <LGLogo />
                </BrandCard>,
                <BrandCard title='/GQ' key='/GQ'>
                  <GQLogo />
                </BrandCard>,
              ]}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BrandSection
