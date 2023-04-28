import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FirstSection from '@/components/sections/FirstSection/FirstSection'
import SectionSection from '@/components/sections/SecondSection/SecondSection'
import TodaySection from '@/components/sections/TodaySection/TodaySection'

export default function Home() {
  return (
    <>
      <FirstSection />
      <SectionSection />
      <TodaySection />
    </>
  )
}
