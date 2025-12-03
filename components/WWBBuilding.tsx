'use client'

import { useEffect, useRef, useState } from 'react'

export default function WWBBuilding() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Belief 1 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-base font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">A</span>
              <span>ccessibility</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              We believe every business — no matter its size — deserves access to intelligent, modern solutions that accelerate growth and unlock new possibilities.
            </p>
          </div>
          {/* Belief 2 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-base font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">P</span>
              <span>roblem-Solving</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              We believe in building products that solve real problems, not just create features.
            </p>
          </div>
          {/* Belief 3 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-base font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">T</span>
              <span>ransparency</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              We believe in transparency, collaboration, and earning trust through every interaction.
            </p>
          </div>
          {/* Belief 4 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-base font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">V</span>
              <span>alue Creation</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              We believe great technology only matters when it creates real value for real people.
            </p>
          </div>
          {/* Belief 5 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-base font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">P</span>
              <span>artnership</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              We believe in partnership — because innovation happens faster when we grow together with our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}