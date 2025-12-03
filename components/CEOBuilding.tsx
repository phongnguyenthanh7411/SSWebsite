'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function CEOBuilding() {
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
    <section ref={ref} className={`py-16 px-6 bg-background ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">
          {/* Left side */}
          <div className="text-center">
            <Image src="/media/ceo.jpg" alt="CEO" width={300} height={300} className="rounded-full mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-2">PHONG NGUYEN</h3>
            <p className="text-lg text-muted-foreground">CEO</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-64 bg-primary border-l-2 border-dashed border-primary"></div>

          {/* Right side */}
          <div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Data and Analysis expert with over 10 years of experience in most of the fields including: RETAIL, REAL ESTATE, MLM (CGV, LAZADA, AUCHAN, BW INDUSTRIAL). Many years of using programming languages (Python, Javascript,...), data query languages (SQL), reporting systems (Excel, Power BI, SSRS, STREAMLIT, DASH,...). Managing the implementation of projects to build databases and automatic reporting systems. Experience in performing in-depth analytical reports for businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}