'use client'
import React, { useLayoutEffect, useRef } from 'react' 
import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Index() {
  const leftc = useRef(null);
  const rightc = useRef(null);
  const logo = useRef(null);

  useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: document.documentElement,
              scrub: true,
              start: "top",
              end: "+=800px",
              // markers: "true"
          },
      })

      timeline
          .to(leftc.current, {left: `-12%`})
          // .to(leftc.current, {clipPath: `polygon(0 0, 60% 0, 0 25%, 0 100%)`})
          .to(rightc.current, {right: `-12%`}, 0)
          .to(logo.current, {left: `2%`}, 0)
          // .from(background.current, {clipPath: `inset(15%)`})
          // .to(introImage.current, {height: "200px"}, 0)
  }, [])


  return (
    <div className={styles.landing}>
      <div className={styles.left_courtain} ref={leftc}></div>
      <div className={styles.right_courtain} ref={rightc}></div>
      <div  data-scroll data-scroll-speed="0.3" className={styles.title_wrapper}>
        <h1 className={styles.title}>Lucas Uriarte</h1>
      </div>
      <div className={styles.logo_wrapper} ref={logo}>
        <h1 className={styles.logo}>LU</h1>
      </div>
      <div data-scroll data-scroll-speed="0.6" className={styles.music_player_wrapper}>
        <div className={styles.music_player}></div>
      </div>
    </div>
  )
}