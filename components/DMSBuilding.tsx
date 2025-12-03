'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function DMSBuilding() {
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
              <h3 className="text-xl font-semibold text-primary mb-4">1. Microsoft PowerApps</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Create fully customized modern UI Design.</li>
                <li>Apply rules to ensure accurate input (required fields, limits, conditional validation).</li>
                <li>Works with Dataverse, SharePoint, SQL, Excel, and 400+ other connectors.</li>
                <li>Use formulas and Power Automate flows to handle submissions, approvals, notifications, and processing.</li>
                <li>Supports role-based security, offline mode, and mobile/tablet data entry.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">2. Microsoft Copilot Agent</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Natural language data entry with actions behind the scenes.</li>
                <li>No need to open PowerApps forms or SQL tools — Copilot becomes the self-service interface.</li>
                <li>Enterprise security & governance that ensures safe and auditable data operations.</li>
                <li>Smart AI validation & error handling</li>
                <li>Support any type of data structure (JSON, PDF, TXT,...) for entry</li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-start space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Data Management System</h3>
            <div className="flex items-center space-x-4">
              <Image src="/media/PowerApps.svg" alt="PowerApps" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT POWERAPPS</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/CopilotStudio.svg" alt="Copilot Studio" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT COPILOT AGENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}