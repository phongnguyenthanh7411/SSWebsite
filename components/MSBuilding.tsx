'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function MSBuilding() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div className="space-y-8 border-r-2 border-dashed border-gray-300 pr-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">1. Microsoft Dataverse</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Enterprise apps with relational data</li>
                <li>Scenarios requiring high security, controlled access, and data integrity</li>
                <li>Finance, logistics, operations, HR applications</li>
                <li>Dynamics 365 extensions</li>
                <li>Apps needing large datasets and complex business logic</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">2. Microsoft SharePoint</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Lightweight business applications</li>
                <li>Task lists, employee directories, issue trackers</li>
                <li>Document-based solutions</li>
                <li>Teams collaboration portals</li>
                <li>Apps that don’t require complex relationships or large datasets</li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-start space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Microsoft Cloud Services</h3>
            <div className="flex items-center space-x-4">
              <Image src="/media/Dataverse.svg" alt="Dataverse" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT DATAVERSE</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/Sharepoint.svg" alt="SharePoint" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT SHAREPOINT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}