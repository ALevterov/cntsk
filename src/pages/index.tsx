import styles from '@/styles/Home.module.css'
import FirstSection from '@/components/sections/FirstSection/FirstSection'
import SectionSection from '@/components/sections/SecondSection/SecondSection'
import TodaySection from '@/components/sections/TodaySection/TodaySection'
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import MenuButton from '@/components/ui/MenuButton/MenuButton'
import Menu from '@/components/ui/Menu/Menu'
import menuStyles from '@/components/sections/FirstSection/FirstSection.module.css'
import VideoSection from '@/components/sections/VideoSection/VideoSection'
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const sectionRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (sectionRef.current) {
        if (window.scrollY <= window.innerHeight + 200) {
          sectionRef.current.style.marginTop = `calc(${window.scrollY}px)`
        }
      }
    })
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
      <Menu opened={menuOpen} />
      <FirstSection />
      <div className={styles.contentContainer} ref={sectionRef}>
        <SectionSection />
        <TodaySection />
        <VideoSection />
      </div>
    </>
  )
}
