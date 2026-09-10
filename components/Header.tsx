'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useLanguage()

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href
    return isActive
      ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
      : 'text-muted-foreground hover:text-primary pb-1'
  }

  return (
    <header className="bg-background py-4 px-6 flex items-center justify-between border-b border-border sticky top-0 z-50">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/media/Logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
        </Link>
        <span className="ml-2 text-xl font-bold text-primary">Sigma Solution</span>
      </div>

      {/* Middle: Nav Bar */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className={getLinkClasses('/')}>{t.nav.home}</Link>
        <Link href="/products" className={getLinkClasses('/products')}>{t.nav.products}</Link>
        <Link href="/team" className={getLinkClasses('/team')}>{t.nav.team}</Link>
        <Link href="/faqs" className={getLinkClasses('/faqs')}>{t.nav.faqs}</Link>
      </nav>

      {/* Right side: Language Switcher & Contact Us Link */}
      <div className="flex items-center space-x-3">
        {/* Language Switch Button */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Switch language"
          className="flex items-center space-x-1.5 px-3 py-2 rounded-lg border border-dashed border-gray-300 bg-white hover:border-primary/50 hover:bg-neutral-50 transition-all duration-200 shadow-sm font-mono text-xs font-bold select-none cursor-pointer"
          title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
        >
          <Globe className="w-3.5 h-3.5 text-primary" />
          <span className={language === 'vi' ? 'text-primary font-extrabold' : 'text-neutral-400 font-medium'}>VI</span>
          <span className="text-neutral-300">/</span>
          <span className={language === 'en' ? 'text-primary font-extrabold' : 'text-neutral-400 font-medium'}>EN</span>
        </button>

        {/* Contact Us Link */}
        <Link href="/contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center font-semibold text-sm transition-colors shadow-sm">
          <svg className="w-4 h-4 mr-1.5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          {t.nav.contact}
        </Link>
      </div>
    </header>
  )
}