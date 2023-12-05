'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import Landing from '../components/Landing'
import Music from '../components/Music'

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
      <Landing />
      <Music />
    </main>
  )
}
