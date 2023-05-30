import styles from '@/styles/Home.module.css'
import FirstSection from '@/components/sections/FirstSection/FirstSection'
import SecondSection from '@/components/sections/SecondSection/SecondSection'
import TodaySection from '@/components/sections/TodaySection/TodaySection'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import menuStyles from '@/components/sections/FirstSection/FirstSection.module.css'
import VideoSection from '@/components/sections/VideoSection/VideoSection'
import PossibilitiesSection from '@/components/sections/PossibilitiesSection/PossibilitiesSection'
import MenuButton from '@/components/ui/Common/MenuButton/MenuButton'
import Menu from '@/components/ui/Common/Menu/Menu'
import AboutSection from '@/components/sections/About/AboutSection'
import BrandSection from '@/components/sections/BrandSection/BrandSection'
import ManagmentSection from '@/components/sections/ManagmentSection/ManagmentSection'
import Footer from '@/components/sections/Footer/Footer'
import ServicesSection from '@/components/sections/ServicesSection/ServicesSection'
import CasesSection from '@/components/sections/CasesSection/CasesSection'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const firstHalfRef = useRef<HTMLDivElement | null>(null)
  const secondHalfRef = useRef<HTMLDivElement | null>(null)
  const allContentRef = useRef<HTMLDivElement | null>(null)
  const scrollPos = useRef<number | null>(null)
  const scrollPosSaved = useRef<number | null>(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const scrollListener = useCallback(() => {
    let additionalScroll = 100

    if (window.innerWidth > 768) {
      additionalScroll = 600
    }
    if (window.innerWidth <= 768) {
      additionalScroll = 100
    }
    scrollPos.current = window.scrollY
    const vh = window.innerHeight / 100
    if (sectionRef.current) {
      if (window.scrollY <= window.innerHeight + additionalScroll) {
        sectionRef.current.style.marginTop = `calc(${window.scrollY}px)`
      }
    }
    if (firstHalfRef.current && secondHalfRef.current) {
      const dif = window.scrollY - firstHalfRef.current.clientHeight
      if (
        window.scrollY >= firstHalfRef.current.clientHeight &&
        window.scrollY <= firstHalfRef.current.clientHeight + 180 * vh
      ) {
        firstHalfRef.current.style.transform = `translateY(${-1 * dif})`
        secondHalfRef.current.style.marginTop = `calc(${window.scrollY}px)`
      }
    }
  }, [])
  useEffect(() => {
    if (window.innerWidth > 768) {
      return
    }
    if (menuOpen) {
      if (allContentRef.current) {
        allContentRef.current.classList.add('no-overflow')
        scrollPosSaved.current = scrollPos.current
      }
    } else {
      if (allContentRef.current) {
        allContentRef.current.classList.remove('no-overflow')
        if (scrollPosSaved.current) {
          window.scrollTo(0, scrollPosSaved.current)
        }
      }
    }
  }, [menuOpen])
  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    if (secondHalfRef.current && firstHalfRef.current) {
      secondHalfRef.current.style.marginTop = `calc(${firstHalfRef.current.clientHeight}px + 120vh)`
    }
  }, [scrollListener])
  const menuIconClasses = useMemo(() => {
    const classes = [menuStyles.menuIcon]
    if (menuOpen) {
      classes.push(menuStyles.opened)
    }
    return classes
  }, [menuOpen])

  return (
    <>
      <div ref={allContentRef}>
        <div className={menuIconClasses.join(' ')} onClick={toggleMenu}>
          <MenuButton />
        </div>
        <div className={styles.firstHalfWrapper} ref={firstHalfRef}>
          <FirstSection />
          <div className={styles.contentContainer} ref={sectionRef}>
            <SecondSection />
            <TodaySection />
            <VideoSection />
            <ServicesSection />
            <PossibilitiesSection />
          </div>
        </div>
        <div className={styles.secondHalfWrapper} ref={secondHalfRef}>
          <AboutSection />
          <BrandSection />
          <CasesSection />
          <ManagmentSection />
          <Footer />
        </div>
      </div>
      <Menu opened={menuOpen} closeMenu={closeMenu} />
    </>
  )
}
