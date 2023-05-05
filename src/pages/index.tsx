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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const firstHalfRef = useRef<HTMLDivElement | null>(null)
  const secondHalfRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const vh = window.innerHeight / 100
      if (sectionRef.current) {
        if (window.scrollY <= window.innerHeight + 200) {
          sectionRef.current.style.marginTop = `calc(${window.scrollY}px)`
        }
      }
      if (firstHalfRef.current && secondHalfRef.current) {
        const dif =
          window.scrollY - firstHalfRef.current.clientHeight + 120 * vh
        if (window.scrollY >= firstHalfRef.current.clientHeight + 120 * vh) {
          firstHalfRef.current.style.transform = `translatY(${-1 * dif})`
          secondHalfRef.current.style.marginTop = `calc(${window.scrollY}px)`
        }
      }
    })
    if (secondHalfRef.current && firstHalfRef.current) {
      secondHalfRef.current.style.marginTop = `calc(${firstHalfRef.current.clientHeight}px + 120vh)`
    }
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
      <div className={menuIconClasses.join(' ')} onClick={toggleMenu}>
        <MenuButton />
      </div>
      <div className={styles.firstHalfWrapper} ref={firstHalfRef}>
        <Menu opened={menuOpen} />
        <FirstSection />
        <div className={styles.contentContainer} ref={sectionRef}>
          <SecondSection />
          <TodaySection />
          <VideoSection />
          <PossibilitiesSection />
          <AboutSection />
        </div>
      </div>
      {/* <div className={styles.secondHalfWrapper} ref={secondHalfRef}>
        <AboutSection />
      </div> */}
    </>
  )
}
