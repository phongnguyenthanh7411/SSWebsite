'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

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
        <Image src="/media/Logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
        <span className="ml-2 text-xl font-bold text-primary">Sigma Solution</span>
      </div>

      {/* Middle: Nav Bar */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className={getLinkClasses('/')}>Home</Link>
        <Link href="/products" className={getLinkClasses('/products')}>Our Products</Link>
        <Link href="/team" className={getLinkClasses('/team')}>Core Team</Link>
        <Link href="/faqs" className={getLinkClasses('/faqs')}>FAQs</Link>
      </nav>

      {/* Right side: Contact Us Link */}
      <div>
        <Link href="/contact" className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 flex items-center">
          <svg className="w-4 h-4 mr-2 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Contact Us
        </Link>
      </div>
    </header>
  )
}