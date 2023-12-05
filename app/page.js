'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import Menu from '../components/Menu'
import Landing from '../components/Landing'
import Music from '../components/Music'
import Texts from '../components/Texts'
import About from '../components/About'

export default function Home() {
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.frame}></div>
      <Menu />
      <Landing />
      <Music />
      <Texts />
      <About />
    </main>
  )
}
