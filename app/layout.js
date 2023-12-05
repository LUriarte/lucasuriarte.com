import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

export const metadata = {
  title: 'Lucas Uriarte',
  description: 'Músicas & Aulas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <PrismicPreview repositoryName={lucas-uriarte} />
      </body>
    </html>
  )
}
