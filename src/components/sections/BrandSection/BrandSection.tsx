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
const BrandSection = () => {
  return (
    <div className={styles.section}>
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
      </div>
    </div>
  )
}

export default BrandSection
