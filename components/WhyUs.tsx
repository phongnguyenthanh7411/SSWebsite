'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhyUs() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-dashed rounded-md p-6 shadow-sm transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-3 text-primary">Speedy</h3>
            <p className="text-sm text-muted-foreground">
              We build processes and standardize data so that reporting is delivered to our customers, analysts and administrators at speed, enabling them to take timely data-driven actions and reactions.
            </p>
          </div>
          <div className="bg-white border border-dashed rounded-md p-6 shadow-sm transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-3 text-primary">Accuracy</h3>
            <p className="text-sm text-muted-foreground">
              Data accuracy in construction and standardization as a mandatory attribute for managers and analysts. From there, it helps managers and analysts evaluate and execute plans accurately.
            </p>
          </div>
          <div className="bg-white border border-dashed rounded-md p-6 shadow-sm transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-3 text-primary">Insightful</h3>
            <p className="text-sm text-muted-foreground">
              In addition to helping our clients, analysts and administrators standardize and build reports, we also pay special attention to business indicators, suggesting additional insights to help clients have the most in-depth views.
            </p>
          </div>
          <div className="bg-white border border-dashed rounded-md p-6 shadow-sm transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-3 text-primary">Safety</h3>
            <p className="text-sm text-muted-foreground">
              One of our top priorities is helping customers build databases with the highest security, giving customers complete peace of mind when using our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}