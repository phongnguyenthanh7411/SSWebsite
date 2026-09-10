'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Database, Server, Layout, Brain, BarChart3, ArrowDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function MatrixOverview() {
  const { t } = useLanguage()
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

  const matrixColumns = [
    {
      id: 'database',
      title: 'DATABASE',
      headerClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite']
    },
    {
      id: 'backend',
      title: 'BACKEND',
      headerClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      items: ['Python', 'C# / .NET', 'Node.js', 'FastAPI', 'Golang']
    },
    {
      id: 'frontend',
      title: 'FRONTEND',
      headerClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      items: ['React / Next', 'Vue.js', 'Tailwind', 'Flutter', 'PWA']
    },
    {
      id: 'aiml',
      title: 'AI / ML',
      headerClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      items: ['OpenAI', 'Claude', 'LangChain', 'Ollama', 'LlamaIndex']
    },
    {
      id: 'bi-lowcode',
      title: 'BI & LOW-CODE',
      headerClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      items: ['Power BI', 'Automate', 'Streamlit', 'Dash', 'SharePoint']
    }
  ]

  const pillars = [
    {
      id: 'database',
      title: 'DATABASE',
      subtitle: t.matrix.dbSub,
      color: 'border-blue-500/40 text-blue-600 bg-blue-50/50',
      icon: Database,
      techs: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite']
    },
    {
      id: 'backend',
      title: 'BACKEND',
      subtitle: t.matrix.beSub,
      color: 'border-emerald-500/40 text-emerald-600 bg-emerald-50/50',
      icon: Server,
      techs: ['Python', 'C# / .NET', 'Node.js', 'FastAPI', 'Golang']
    },
    {
      id: 'frontend',
      title: 'FRONTEND',
      subtitle: t.matrix.feSub,
      color: 'border-teal-500/40 text-teal-600 bg-teal-50/50',
      icon: Layout,
      techs: ['React / Next', 'Vue.js', 'Tailwind', 'Flutter', 'PWA']
    },
    {
      id: 'aiml',
      title: 'AI / ML',
      subtitle: t.matrix.aiSub,
      color: 'border-indigo-500/40 text-indigo-600 bg-indigo-50/50',
      icon: Brain,
      techs: ['OpenAI', 'Claude', 'LangChain', 'Ollama', 'LlamaIndex']
    },
    {
      id: 'bi-lowcode',
      title: 'BI & LOW-CODE',
      subtitle: t.matrix.biSub,
      color: 'border-amber-500/40 text-amber-600 bg-amber-50/50',
      icon: BarChart3,
      techs: ['Power BI', 'Automate', 'Streamlit', 'Dash', 'SharePoint']
    }
  ]

  return (
    <section ref={ref} className={`py-12 px-6 bg-background ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Banner Section */}
        <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs tracking-wider rounded-full uppercase">
                {t.matrix.tag}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                {t.matrix.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.matrix.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md">Enterprise Ready</span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md">High Scalability</span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md">Private AI On-Premise</span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md">Real-time Analytics</span>
              </div>
            </div>

            {/* Live Interactive Technology Matrix Board */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900 text-white p-4 md:p-5 shadow-2xl overflow-hidden group">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Cyber Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 relative z-10">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 font-semibold tracking-wider ml-2">
                      [ MATRIX KERNEL // 5x5 ARCHITECTURE ]
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* 5-Column Matrix Grid */}
                <div className="grid grid-cols-5 gap-1.5 md:gap-2.5 relative z-10">
                  {matrixColumns.map((col) => (
                    <a
                      key={col.id}
                      href={`#${col.id}`}
                      className="flex flex-col space-y-1.5 group/col"
                    >
                      {/* Column Header Badge */}
                      <div className={`py-1 px-1 rounded text-center font-bold text-[9px] md:text-[10px] uppercase tracking-wider border transition-all duration-200 ${col.headerClass} group-hover/col:scale-105`}>
                        {col.title}
                      </div>

                      {/* 5 Technology Chips in Column */}
                      <div className="flex flex-col space-y-1">
                        {col.items.map((tech) => (
                          <div
                            key={tech}
                            className="bg-neutral-800/80 border border-neutral-700/80 hover:border-primary hover:bg-neutral-700/90 text-neutral-200 hover:text-white py-1.5 px-1 text-center rounded text-[10px] md:text-[11px] font-medium transition-all duration-200 shadow-sm"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>

                {/* Matrix Bottom Status Bar */}
                <div className="mt-3.5 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400 relative z-10">
                  <span className="flex items-center space-x-1">
                    <span className="text-primary">⚡</span>
                    <span>25 ENTERPRISE TECHNOLOGIES</span>
                  </span>
                  <span className="text-neutral-500 hidden sm:inline">MULTI-CLOUD & ON-PREMISE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Pillar Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className={`border border-dashed rounded-xl p-4 bg-white transition-all duration-300 hover:scale-105 hover:shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                      0{idx + 1}
                    </span>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm tracking-wide mb-1">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{pillar.subtitle}</p>
                  <div className="flex flex-wrap gap-1">
                    {pillar.techs.map((tech) => (
                      <span key={tech} className="text-[11px] px-1.5 py-0.5 bg-neutral-100 text-neutral-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-dashed border-gray-200 flex items-center text-xs font-medium text-primary">
                  <span>{t.matrix.details}</span>
                  <ArrowDown className="w-3.5 h-3.5 ml-1" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
