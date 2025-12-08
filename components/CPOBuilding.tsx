'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function CPOBuilding() {
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
          <div>
            <p className="text-muted-foreground text-base leading-relaxed">
              A Data and System engineer with over 7 years of experience in system development and database construction for businesses (PEPSI, AJINOMOTO, MASAN,..). Has in-depth knowledge of the process of synthesizing, processing and developing solutions on Data. Has experience in managing and deploying data models for large corporations and performing automatic reports to optimize labor productivity for businesses.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-64 bg-primary border-l-2 border-dashed border-primary"></div>

          {/* Right side */}

          <div className="text-center">
            <Image src="/media/quoc.png" alt="CPO" width={300} height={300} className="rounded-full mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-2">QUOC DANG</h3>
            <p className="text-lg text-muted-foreground">CPO</p>
          </div>

        </div>
      </div>
    </section>
  )
}