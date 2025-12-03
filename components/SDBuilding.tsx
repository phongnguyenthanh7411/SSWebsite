'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function SDBuilding() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={`py-16 px-6 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">
          {/* Left side */}
          <div className="text-center">
            <Image src="/media/sd.jpg" alt="Sales Director" width={300} height={300} className="rounded-full mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-2">VU NGUYEN</h3>
            <p className="text-lg text-muted-foreground">SALES DIRECTOR</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-64 bg-primary border-l-2 border-dashed border-primary"></div>

          {/* Right side */}
          <div>
            <p className="text-muted-foreground text-base leading-relaxed">
              An expert in the field of sales with many years of experience in the field of management and development of business projects for many large companies in the fields of RETAIL, LOGISTIC, as well as the ability to build and develop teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}