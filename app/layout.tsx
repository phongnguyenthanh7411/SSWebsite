import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sigma Solution - Full-Stack Technology & AI Solutions',
  description: 'Sigma Solution - Your trusted partner for Full-Stack Development, Data Architecture, Modern BI & Enterprise AI Solutions.',
  icons: {
    icon: '/media/Logo.png',
    apple: '/media/Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}