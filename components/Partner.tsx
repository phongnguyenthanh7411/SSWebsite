'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Partner() {
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
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Clients</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-64">
          {/* Partner 1 */}
          <div className="flex flex-col items-center">
            <div className="h-32 flex items-center justify-center mb-4">
              <Image
                src="/media/VIETSUN.png"
                alt="VIETSUN"
                width={200}
                height={150}
                className="max-h-32 w-auto object-contain"
              />
            </div>
            <p className="text-lg font-semibold text-center text-[#001233]">VIETSUN CORPORATION</p>
          </div>
          {/* Partner 2 */}
          <div className="flex flex-col items-center">
            <div className="h-32 flex items-center justify-center mb-4">
              <Image
                src="/media/INTERSNACK.png"
                alt="INTERSNACK"
                width={200}
                height={150}
                className="max-h-32 w-auto object-contain"
              />
            </div>
            <p className="text-lg font-semibold text-center text-[#6E645A]">INTERSNACK CASHEW COMPANY</p>
          </div>
        </div>
      </div>
    </section>
  )
}