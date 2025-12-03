'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PBIBuilding() {
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
              <h3 className="text-xl font-semibold text-primary mb-4">1. Microsoft Power BI</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Create interactive dashboards, charts, KPIs, and reports with drag-and-drop visuals.</li>
                <li>Supports 100+ connectors: SQL Server, Dataverse, SharePoint, Excel, SAP, Oracle, APIs, cloud services, and more.</li>
                <li>Stream live data from systems, IoT, databases, and business applications to monitor KPIs instantly.</li>
                <li>Includes data modeling, row-level security (RLS), governance controls, and scalable cloud architecture.</li>
                <li>Publish reports to Power BI Service, embed in Teams, SharePoint, or deploy to mobile apps for organization-wide insights.</li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-start space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Business Intelligence</h3>
            <div className="flex items-center space-x-4">
              <Image src="/media/PowerBI.svg" alt="PowerBI" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT POWERBI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}