'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const ref = useRef(null)
  const ref2 = useRef(null)

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref2.current) observer.observe(ref2.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={ref} className={`py-16 px-6 bg-background ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left side: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Power Platform Services Partner
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              PowerPlatform Service Provider That You Can Absolutely Trust for Quality Product.
            </p>
            <Link href="/products" className="bg-secondary text-secondary-foreground px-6 py-3 rounded hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 inline-block">
              Explore Now
            </Link>
          </div>

          {/* Right side: Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/media/PowerPlatform2.png"
              alt="PowerPlatform"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Product Simulation */}
      <section ref={ref2} className={`py-16 px-6 bg-white ${isVisible2 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Product Flow Simulation
          </h2>
          <div className="flex items-center justify-start space-x-4 mt-8">
            <div className="w-[28rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-110">
              <span className="text-base font-semibold mb-4">Data Entry</span>
              <div className="flex flex-col justify-center items-stretch space-y-4 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <Image src="/media/PowerApps.svg" alt="PowerApps" width={24} height={24} className="mr-2" />
                    <span className="text-sm font-semibold">PowerApps Web Platform</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Filling data by Form-like, Excel-like table</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <Image src="/media/CopilotStudio.svg" alt="Copilot Studio" width={24} height={24} className="mr-2" />
                    <span className="text-sm font-semibold">Copilot Studio Chat Platform</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Filling data by chat with Agent</p>
                </div>
              </div>
            </div>
            <svg width="50" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="40" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead1)" />
              <defs>
                <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>
            <div className="w-[28rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-110">
              <span className="text-base font-semibold mb-4">Data Storage</span>
              <div className="flex flex-col justify-center items-stretch space-y-4 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-4 flex-1">
                  <div className="flex items-center mb-2 space-x-2">
                    <Image src="/media/SqlServer.svg" alt="SQL Server" width={24} height={24} />
                    <Image src="/media/MySQL.svg" alt="MySQL" width={24} height={24} />
                    <Image src="/media/PostgreSQL.svg" alt="PostgreSQL" width={24} height={24} />
                    <span className="text-sm font-semibold">On-premise Server</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Storing data with structure database On-premise</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-4 flex-1">
                  <div className="flex items-center mb-2 space-x-2">
                    <Image src="/media/Dataverse.svg" alt="Dataverse" width={24} height={24} />
                    <Image src="/media/Sharepoint.svg" alt="SharePoint" width={24} height={24} />
                    <span className="text-sm font-semibold">Microsoft Cloud Services</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Storing data with structure database on Microsoft-Cloud</p>
                </div>
              </div>
            </div>
            <svg width="50" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="40" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>
            {/* Business Intelligence */}
            <div className="w-[28rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-110">
              <span className="text-base font-semibold mb-4">Business Intelligence</span>
              <div className="bg-neutral-50 border border-dashed rounded-md p-4 w-full flex-1 flex flex-col space-y-2 overflow-hidden">
                <div className="flex items-center">
                  <Image src="/media/PowerBI.svg" alt="Power BI" width={24} height={24} className="mr-2" />
                  <span className="text-sm font-semibold">Power BI</span>
                </div>
                <div className="flex-1 flex items-center justify-center min-h-0">
                  <svg width="200" height="80" viewBox="0 0 200 80" className="max-w-full max-h-full">
                    <path d="M10 60 L50 45 L90 52 L130 30 L170 37" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="300" strokeDashoffset="300">
                      <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
                <div className="flex-1 flex items-center justify-center min-h-0">
                  <svg width="200" height="80" viewBox="0 0 200 80" className="max-w-full max-h-full">
                    <rect x="20" y="55" width="20" height="0" fill="currentColor">
                      <animate attributeName="height" from="0" to="25" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="y" from="55" to="30" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="60" y="40" width="20" height="0" fill="currentColor">
                      <animate attributeName="height" from="0" to="40" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                      <animate attributeName="y" from="40" to="0" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="100" y="25" width="20" height="0" fill="currentColor">
                      <animate attributeName="height" from="0" to="55" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                      <animate attributeName="y" from="25" to="0" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="140" y="45" width="20" height="0" fill="currentColor">
                      <animate attributeName="height" from="0" to="35" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" from="45" to="20" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                    </rect>
                  </svg>
                </div>
              </div>
            </div>
            <svg width="50" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="40" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <defs>
                <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>
            <div className="w-[28rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-110">
              <span className="text-base font-semibold mb-4">Business Automation</span>
              <div className="flex flex-col justify-center items-stretch space-y-4 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <Image src="/media/PowerAutomate.svg" alt="Power Automate" width={24} height={24} className="mr-2" />
                    <span className="text-sm font-semibold">Power Automate</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Workflow Automation, Report Integration, Task Automation</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <Image src="/media/AIBuilder.svg" alt="AI Builder" width={24} height={24} className="mr-2" />
                    <span className="text-sm font-semibold">AI Builder</span>
                  </div>
                  <p className="text-xs text-muted-foreground">AI Automation, AI Recognition, Prediction & Classification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}