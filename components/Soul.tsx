'use client'

import { Eye, Target, Sparkles, ShieldCheck, TrendingUp, Brain, Headphones } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Soul() {
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

  const sigmaValues = [
    {
      letter: 'S',
      title: t.soul.valS.title,
      code: 'VAL-01',
      tag: t.soul.valS.tag,
      icon: Sparkles,
      color: 'from-blue-500/20 to-cyan-500/10 text-blue-600',
      description: t.soul.valS.desc
    },
    {
      letter: 'I',
      title: t.soul.valI.title,
      code: 'VAL-02',
      tag: t.soul.valI.tag,
      icon: ShieldCheck,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-600',
      description: t.soul.valI.desc
    },
    {
      letter: 'G',
      title: t.soul.valG.title,
      code: 'VAL-03',
      tag: t.soul.valG.tag,
      icon: TrendingUp,
      color: 'from-amber-500/20 to-orange-500/10 text-amber-600',
      description: t.soul.valG.desc
    },
    {
      letter: 'M',
      title: t.soul.valM.title,
      code: 'VAL-04',
      tag: t.soul.valM.tag,
      icon: Brain,
      color: 'from-purple-500/20 to-indigo-500/10 text-purple-600',
      description: t.soul.valM.desc
    },
    {
      letter: 'A',
      title: t.soul.valA.title,
      code: 'VAL-05',
      tag: t.soul.valA.tag,
      icon: Headphones,
      color: 'from-sky-500/20 to-blue-500/10 text-sky-600',
      description: t.soul.valA.desc
    }
  ]

  return (
    <section ref={ref} className={`py-20 px-6 bg-muted/50 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Decorative Tech Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          <span>{t.soul.badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
          {t.soul.title}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          {t.soul.subtitle}
        </p>
      </div>

      {/* Above part: Mission & Vision Cards */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col justify-between h-full">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Tech Corner Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                [ SPEC // 01 ]
              </span>
              <span className="text-xs font-semibold text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                {t.soul.missionSub}
              </span>
            </div>

            <div className="flex items-start space-x-4 mb-4">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-sm group-hover:bg-primary/40 transition-colors" />
                <div className="relative bg-primary text-white p-3 rounded-xl shadow-md">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{t.soul.missionTitle}</h3>
                <p className="text-xs text-primary font-medium uppercase tracking-wider mt-0.5">{t.soul.missionSub}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              {t.soul.missionText}
            </p>

            {/* Tech Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-dashed border-gray-200 mt-auto">
              {t.soul.missionPills.map((pill, idx) => (
                <div key={idx} className="text-[11px] font-semibold text-neutral-700 bg-neutral-50 px-2.5 py-1.5 rounded-md border border-neutral-200/80 flex items-center">
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col justify-between h-full">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Tech Corner Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                [ HORIZON // 02 ]
              </span>
              <span className="text-xs font-semibold text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-1.5" />
                {t.soul.visionSub}
              </span>
            </div>

            <div className="flex items-start space-x-4 mb-4">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-teal-500/20 rounded-xl blur-sm group-hover:bg-teal-500/40 transition-colors" />
                <div className="relative bg-teal-600 text-white p-3 rounded-xl shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{t.soul.visionTitle}</h3>
                <p className="text-xs text-teal-600 font-medium uppercase tracking-wider mt-0.5">{t.soul.visionSub}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              {t.soul.visionText}
            </p>

            {/* Tech Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-dashed border-gray-200 mt-auto">
              {t.soul.visionPills.map((pill, idx) => (
                <div key={idx} className="text-[11px] font-semibold text-neutral-700 bg-neutral-50 px-2.5 py-1.5 rounded-md border border-neutral-200/80 flex items-center">
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Below part: SIGMA Values Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground flex items-center">
            <span className="font-mono text-primary mr-2">//</span>
            {t.soul.valuesTitle}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">SYSTEM VALUES: 05 NODES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sigmaValues.map((val) => {
            const Icon = val.icon
            return (
              <div
                key={val.letter}
                className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col justify-between overflow-hidden"
              >
                {/* Hover Top Highlight Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded">
                      {val.code}
                    </span>
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {val.letter}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground leading-tight">
                        {val.letter}{val.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-primary block mt-0.5">{val.tag}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-dashed border-gray-100 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>SIGMA // PROTOCOL</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}