import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FirstSection from '@/components/sections/FirstSection/FirstSection'
import SectionSection from '@/components/sections/SecondSection/SecondSection'

export default function Home() {
  return (
    <>
      <FirstSection />
      <SectionSection />
    </>
  )
}
