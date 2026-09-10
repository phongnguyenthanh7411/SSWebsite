'use client'

import { useEffect, useRef, useState } from 'react'
import { Zap, Crosshair, Cpu, Lock, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function WhyUs() {
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

  const edges = [
    {
      id: '01',
      title: t.whyUs.speedy,
      subtitle: t.whyUs.speedySub,
      icon: Zap,
      accent: 'from-amber-500 to-yellow-400',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      metric: t.whyUs.speedyMetric,
      metricColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: t.whyUs.speedyDesc,
      techs: ['FastAPI', 'Golang Engine', 'Redis Cache']
    },
    {
      id: '02',
      title: t.whyUs.accuracy,
      subtitle: t.whyUs.accuracySub,
      icon: Crosshair,
      accent: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
      metric: t.whyUs.accuracyMetric,
      metricColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: t.whyUs.accuracyDesc,
      techs: ['ACID Compliance', 'Schema Guard', 'CI/CD Testing']
    },
    {
      id: '03',
      title: t.whyUs.insightful,
      subtitle: t.whyUs.insightfulSub,
      icon: Cpu,
      accent: 'from-indigo-500 to-purple-400',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      metric: t.whyUs.insightfulMetric,
      metricColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: t.whyUs.insightfulDesc,
      techs: ['Power BI DAX', 'GenAI Agents', 'Predictive ML']
    },
    {
      id: '04',
      title: t.whyUs.safety,
      subtitle: t.whyUs.safetySub,
      icon: Lock,
      accent: 'from-emerald-500 to-teal-400',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      metric: t.whyUs.safetyMetric,
      metricColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: t.whyUs.safetyDesc,
      techs: ['Private On-Premise AI', 'End-to-End Encryption', 'RBAC']
    }
  ]

  return (
    <section ref={ref} className={`py-20 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            {t.whyUs.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Technology Edge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {edges.map((edge) => {
            const Icon = edge.icon
            return (
              <div
                key={edge.id}
                className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Hover Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edge.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Top Bar: Code Index & Metric Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded">
                      [ EDGE // {edge.id} ]
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-sm ${edge.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edge.title}
                      </h3>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        {edge.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Benchmark Metric Badge */}
                  <div className="mb-4">
                    <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-md border ${edge.metricColor}`}>
                      {edge.metric}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {edge.description}
                  </p>
                </div>

                {/* Tech Tags Bottom Footer */}
                <div className="pt-4 border-t border-dashed border-gray-200">
                  <div className="flex flex-wrap gap-1.5">
                    {edge.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}