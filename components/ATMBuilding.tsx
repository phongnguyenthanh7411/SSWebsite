'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ATMBuilding() {
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
              <h3 className="text-xl font-semibold text-primary mb-4">1. Microsoft PowerAutomate</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Automates repetitive tasks such as sending emails, approvals, updating records, and syncing data.</li>
                <li>Integrates Microsoft 365, Dynamics 365, SQL, SharePoint, Dataverse, SAP, APIs, custom systems, and more via 400+ connectors.</li>
                <li>Includes cloud flows, scheduled flows, instant button flows, robotic process automation (RPA), and process intelligence.</li>
                <li>Create workflows using a visual designer—ideal for business users and IT teams.</li>
                <li>Includes built-in compliance, DLP policies, role-based access, and full audit history for secure automation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">2. Microsoft AIBuilder</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Create and use AI models (prediction, form processing, object detection) without writing code or having ML expertise.</li>
                <li>Extract data from invoices, receipts, IDs, forms, images, and documents using ready-made AI models.</li>
                <li>Use historical data to predict outcomes, classify records, or score business scenarios.</li>
                <li>Embed AI directly into apps or flows to automate decision-making, validation, and data entry steps.</li>
                <li>Train custom AI models using your own data and reuse them across multiple applications and workflows.</li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-start space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Business Automation</h3>
            <div className="flex items-center space-x-4">
              <Image src="/media/powerautomate.svg" alt="PowerAutomate" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT POWER AUTOMATE</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/aibuilder.svg" alt="AIBuilder" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT AI BUILDER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}