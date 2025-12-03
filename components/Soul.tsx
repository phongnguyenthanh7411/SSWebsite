'use client'

import { Eye, Target } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Soul() {
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
      {/* Above part */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-2 mr-3">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground">
              With the mission of enhance businesses with effective and optimal toolkits, accompanying the development of businesses.
            </p>
          </div>
          {/* Right side */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-2 mr-3">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground">
              Become a leading company in the model of supporting the development of application service system on MS365 Platform.
            </p>
          </div>
        </div>
      </div>

      {/* Below part */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">S</span>
              <span>atisfaction</span>
            </h3>
            <p className="text-muted-foreground">
              We always work with all our heart and effort to bring customers the most satisfaction when using our services.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">I</span>
              <span>ntegrity</span>
            </h3>
            <p className="text-muted-foreground">
              Honesty in all plans and solutions to bring the best benefits to customers.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">G</span>
              <span>rowth</span>
            </h3>
            <p className="text-muted-foreground">
              Continuous development and improvement to deliver better value to our customers.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">M</span>
              <span>indful</span>
            </h3>
            <p className="text-muted-foreground">
              Thoughtful consideration in every decision to ensure the best outcomes for our clients.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
              <span className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-2 flex-shrink-0">A</span>
              <span>fter-Service</span>
            </h3>
            <p className="text-muted-foreground">
              Our consistent efforts are not only during the service implementation but also whenever our customers need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}