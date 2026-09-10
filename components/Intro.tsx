'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Video, ChevronLeft, ChevronRight } from 'lucide-react'
import TechHeroGraphic from './TechHeroGraphic'
import { useLanguage } from '@/context/LanguageContext'

export default function Intro() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const ref = useRef(null)
  const ref2 = useRef(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

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
              {t.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {t.hero.subtitle}
            </p>
            <Link href="/products" className="bg-secondary text-secondary-foreground px-6 py-3 rounded hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 inline-block">
              {t.hero.explore}
            </Link>
            <Link href="/demo" className="bg-transparent border border-secondary text-secondary-foreground px-6 py-3 rounded hover:bg-secondary hover:text-secondary-foreground hover:scale-110 transition-all duration-300 inline-block ml-4">
              <Video className="inline w-6 h-6 mr-1 fill-current text-red-500" />{t.hero.demo}
            </Link>

          </div>

          {/* Right side: Technology Vibe Animation */}
          <div className="md:w-1/2 flex justify-center w-full">
            <TechHeroGraphic />
          </div>
        </div>
      </section>
      {/* Product Simulation */}
      <section ref={ref2} className={`py-16 px-6 bg-white ${isVisible2 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">{t.hero.flowBadge}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.hero.flowTitle}
              </h2>
            </div>
            <div className="flex items-center space-x-4 mt-3 md:mt-0">
              <Link href="/products" className="text-sm font-medium text-primary hover:underline inline-flex items-center mr-2">
                {t.hero.flowSeeAll}
              </Link>
              {/* Sleek Scroll Buttons */}
              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  aria-label="Cuộn sang trái"
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  aria-label="Cuộn sang phải"
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex items-center justify-start space-x-4 mt-8 overflow-x-auto pb-5 custom-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          >
            {/* 1. Database */}
            <div className="w-[22rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-base font-semibold mb-3 text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>
                1. Database Architecture
              </span>
              <div className="flex flex-col justify-center items-stretch space-y-3 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5 flex-wrap">
                    <Image src="/media/SqlServer.svg" alt="SQL Server" width={20} height={20} />
                    <Image src="/media/PostgreSQL.svg" alt="PostgreSQL" width={20} height={20} />
                    <span className="text-xs font-semibold text-foreground">RDBMS & Relational</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.dbText1}</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5 flex-wrap">
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">MongoDB</span>
                    <span className="px-1.5 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded">Redis</span>
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">SQLite</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.dbText2}</p>
                </div>
              </div>
            </div>

            <svg width="36" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead1)" />
              <defs>
                <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* 2. Backend */}
            <div className="w-[22rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-base font-semibold mb-3 text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span>
                2. Backend & Services
              </span>
              <div className="flex flex-col justify-center items-stretch space-y-3 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <Image src="/media/GL.svg" alt="Golang" width={20} height={20} />
                    <Image src="/media/DN.svg" alt=".NET" width={20} height={20} />
                    <Image src="/media/NJ.svg" alt="NodeJS" width={20} height={20} />
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.beText1}</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <Image src="/media/FA.svg" alt="FastAPI" width={20} height={20} />
                    <span className="text-xs font-semibold text-foreground">Python & FastAPI</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.beText2}</p>
                </div>
              </div>
            </div>

            <svg width="36" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* 3. Frontend */}
            <div className="w-[22rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-base font-semibold mb-3 text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-2"></span>
                3. Frontend & Mobile
              </span>
              <div className="flex flex-col justify-center items-stretch space-y-3 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <span className="px-1.5 py-0.5 bg-cyan-100 text-cyan-800 text-[10px] font-bold rounded">React / Next</span>
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">Vue.js</span>
                    <span className="px-1.5 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold rounded">Tailwind</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.feText1}</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">Flutter</span>
                    <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-bold rounded">PWA</span>
                    <span className="text-xs font-semibold text-foreground">Multi-Platform</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.feText2}</p>
                </div>
              </div>
            </div>

            <svg width="36" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <defs>
                <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* 4. AI / ML */}
            <div className="w-[22rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-base font-semibold mb-3 text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 mr-2"></span>
                4. AI / ML Engineering
              </span>
              <div className="flex flex-col justify-center items-stretch space-y-3 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <span className="px-1.5 py-0.5 bg-gray-100 text-gray-800 text-[10px] font-bold rounded">OpenAI</span>
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">Claude</span>
                    <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-bold rounded">Ollama</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.aiText1}</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">LangChain</span>
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">LlamaIndex</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.aiText2}</p>
                </div>
              </div>
            </div>

            <svg width="36" height="10" className="flex-shrink-0">
              <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead4)" />
              <defs>
                <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* 5. BI & Low-Code */}
            <div className="w-[22rem] h-80 bg-white border border-dashed rounded-2xl flex flex-col items-start justify-start p-4 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-base font-semibold mb-3 text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>
                5. BI & Low-Code
              </span>
              <div className="flex flex-col justify-center items-stretch space-y-3 w-full h-full flex-1">
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <Image src="/media/PowerBI.svg" alt="Power BI" width={20} height={20} />
                    <Image src="/media/powerautomate.svg" alt="Automate" width={20} height={20} />
                    <Image src="/media/Sharepoint.svg" alt="SharePoint" width={20} height={20} />
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.biText1}</p>
                </div>
                <div className="bg-neutral-50 border border-dashed rounded-md p-3 flex-1">
                  <div className="flex items-center mb-1 space-x-1.5">
                    <span className="px-1.5 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded">Streamlit</span>
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">Dash</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.flow.biText2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}