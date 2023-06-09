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
  const sectionRef = useRef<HTMLDivElement>(null)
  const firstHalfRef = useRef<HTMLDivElement>(null)
  const secondHalfRef = useRef<HTMLDivElement>(null)
  const allContentRef = useRef<HTMLDivElement>(null)
  const scrollPos = useRef<number | null>(null)
  const scrollPosSaved = useRef<number | null>(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const scrollListener = () => {
    scrollPos.current = window.scrollY
    if (window.scrollY > window.innerHeight + 200) {
      sectionRef.current?.classList.remove(styles.fixed)
      secondHalfRef.current?.classList.remove(styles.outOfView)
    } else {
      sectionRef.current?.classList.add(styles.fixed)
      secondHalfRef.current?.classList.add(styles.outOfView)
    }
    let vh = window.innerHeight / 100
    let dif
    if (firstHalfRef.current && firstHalfRef.current.clientHeight !== 0) {
      dif = window.scrollY - firstHalfRef.current.clientHeight
    }
    if (secondHalfRef.current && firstHalfRef.current) {
      if (dif && dif > 0 && dif < 140 * vh) {
        console.log(
          'firstHalfRef.current.clientHeight',
          firstHalfRef.current?.clientHeight
        )
        secondHalfRef.current.style.position = `fixed`
        secondHalfRef.current.style.top = `0`
        firstHalfRef.current.style.marginBottom = `140vh`
      } else {
        secondHalfRef.current.style.position = `static`
        firstHalfRef.current.style.marginBottom = `0`
      }
    }
  }

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
  }, [])
  const menuIconClasses = useMemo(() => {
    const classes = [menuStyles.menuIcon]
    if (menuOpen) {
      classes.push(menuStyles.opened)
    }
    return classes
  }, [menuOpen])

  return (
    <>
      <div ref={allContentRef} id='all-content'>
        <div className={menuIconClasses.join(' ')} onClick={toggleMenu}>
          <MenuButton />
        </div>
        <div className={styles.firstHalfWrapper} ref={firstHalfRef}>
          <div className={styles.firstSectionContainer}>
            <FirstSection />
          </div>
          <div
            className={[styles.contentContainer, styles.fixed].join(' ')}
            ref={sectionRef}
          >
            <SecondSection />
            <TodaySection />
            <VideoSection />
            <ServicesSection />
            <PossibilitiesSection />
          </div>
        </div>
        <div
          className={[styles.secondHalfWrapper, styles.outOfView].join(' ')}
          ref={secondHalfRef}
        >
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
