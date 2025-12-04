'use client'

import { useEffect, useRef, useState } from 'react'
import { User, Smartphone, Users, DollarSign } from 'lucide-react'

export default function Partner() {
  const [isVisible, setIsVisible] = useState(false)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval1 = setInterval(() => {
        setCount1(prev => {
          if (prev < 2) return prev + 1
          clearInterval(interval1)
          return 2
        })
      }, 200)

      const interval2 = setInterval(() => {
        setCount2(prev => {
          if (prev < 3) return prev + 1
          clearInterval(interval2)
          return 3
        })
      }, 200)

      const interval3 = setInterval(() => {
        setCount3(prev => {
          if (prev < 100) return prev + 5
          clearInterval(interval3)
          return 100
        })
      }, 50)

      const interval4 = setInterval(() => {
        setCount4(prev => {
          if (prev < 5000) return prev + 100
          clearInterval(interval4)
          return 5000
        })
      }, 20)
    }
  }, [isVisible])

  return (
    <section ref={ref} className={`py-16 px-6 bg-background ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Did We Serve ?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-40">
          {/* First Main Text */}
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-center text-foreground mb-2"><span className="bg-primary/20 rounded-full w-8 h-8 inline-flex items-center justify-center text-primary mr-2 flex-shrink-0"><User className="w-4 h-4" /></span>Our Client</p>
            <p className="text-3xl font-bold text-center text-black">{count1}+</p>
          </div>
          {/* Second Main Text */}
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-center text-foreground mb-2"><span className="bg-primary/20 rounded-full w-8 h-8 inline-flex items-center justify-center text-primary mr-2 flex-shrink-0"><Smartphone className="w-4 h-4" /></span>Apps Deployment</p>
            <p className="text-3xl font-bold text-center text-black">{count2}+</p>
          </div>
          {/* Third Main Text */}
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-center text-foreground mb-2"><span className="bg-primary/20 rounded-full w-8 h-8 inline-flex items-center justify-center text-primary mr-2 flex-shrink-0"><Users className="w-4 h-4" /></span>Users</p>
            <p className="text-3xl font-bold text-center text-black">{count3}+</p>
          </div>
          {/* Fourth Main Text */}
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-center text-foreground mb-2"><span className="bg-primary/20 rounded-full w-8 h-8 inline-flex items-center justify-center text-primary mr-2 flex-shrink-0"><DollarSign className="w-4 h-4" /></span>Transaction Everyday</p>
            <p className="text-3xl font-bold text-center text-black">{count4}+</p>
          </div>
        </div>
      </div>
    </section>
  )
}