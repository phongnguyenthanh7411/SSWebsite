'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ADBuilding() {
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
        {/* Top */}

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Body-left */}
          <div className="border-r-2 border-dashed border-gray-300 pr-6">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Back-End Framework</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/NJ.svg" alt="NodeJS" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">NodeJS</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/GL.svg" alt="GoLang" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">GoLang</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/DN.svg" alt="ASP.Net" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">ASP.Net</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/FA.svg" alt="FastAPI" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">FastAPI</p>
              </div>
            </div>
          </div>

          {/* Body-right */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Front-End Framework</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/MUI.svg" alt="Material UI" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">Material UI</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/FL.svg" alt="Fluent UI" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">Fluent UI</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/SD.svg" alt="Shadcn UI" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">Shadcn UI</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] mx-auto mb-2 flex items-center justify-center">
                  <Image src="/media/AG.svg" alt="AG DataGrid" width={60} height={60} className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-primary">AG DataGrid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}