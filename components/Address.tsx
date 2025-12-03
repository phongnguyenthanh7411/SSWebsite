'use client'

import { useEffect, useRef, useState } from 'react'

export default function Address() {
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
    <section ref={ref} className={`py-16 px-6 bg-muted/50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">
          SIGMA SOLUTION COMPANY LIMITED
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          Tax Code: 079212300631
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Address: Ho Chi Minh City, VIET NAM
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Email: sales@sigmasolution.vn
        </p>
        <p className="text-lg text-muted-foreground">
          Phone: 0946-004-118
        </p>
      </div>
    </section>
  )
}