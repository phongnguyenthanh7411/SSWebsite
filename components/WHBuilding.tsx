'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function WHBuilding() {
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
              <h3 className="text-xl font-semibold text-primary mb-4">1. Centralized Data Repository</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Consolidates data from multiple systems (ERP, CRM, Excel, databases, applications) into a single unified location.</li>
                <li>Eliminates data silos and improves organization-wide data accessibility.</li>
                <li>Ensures consistency in how data is stored, named, and structured.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">2. Improved Data Quality & Consistency</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Applies cleaning, validation, and transformation rules to ensure reliable and accurate data.</li>
                <li>Standardizes formats, metrics, and business definitions across departments.</li>
                <li>Reduces duplicate, missing, or conflicting records from source systems.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">3. Faster & More Efficient Reporting</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Provides optimized data structures (star schema, snowflake schema) for high-performance BI queries.</li>
                <li>Reduces report refresh time and eliminates dependency on live production systems.</li>
                <li>Enables self-service analytics in Power BI or any BI tool without performance degradation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">4. Stronger Data Governance & Security</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Enforces unified security controls, user access management, and auditing.</li>
                <li>Improves compliance with standards such as GDPR, ISO, or SOC2.</li>
                <li>Ensures that data lineage, metadata, and changes are tracked and documented.</li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-start space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Data Warehouse On-premise</h3>
            <div className="flex items-center space-x-4">
              <Image src="/media/SqlServer.svg" alt="SQL Server" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MICROSOFT SQL SERVER</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/MySql.svg" alt="MySQL" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MYSQL SERVER</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/PostgreSQL.svg" alt="PostgreSQL" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">POSTGRESQL SERVER</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/OracleDB.svg" alt="Oracle" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">ORACLE DATABASE</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/media/MariaDB.svg" alt="Maria" width={50} height={50} />
              <span className="text-lg font-semibold text-primary">MARIA DATABASE</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-primary">And more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}