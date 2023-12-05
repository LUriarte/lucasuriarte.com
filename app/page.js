// 'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import Menu from '../components/Menu'
import Landing from '../components/Landing'
import Music from '../components/Music'
import Texts from '../components/Texts'
import About from '../components/About'

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("landing_page");

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])

  return (
    <SliceZone slices={page.data.slices} components={components}>
      <main className={styles.main}>
        <div className={styles.frame}></div>
        <Menu />
        <Landing />
        <Music />
        <Texts />
        <About />
      </main>
    </SliceZone>
  )
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("landing_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}