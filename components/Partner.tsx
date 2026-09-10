'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Rocket, Users, Activity, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Partner() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval1 = setInterval(() => {
        setCount1(prev => {
          if (prev < 3) return prev + 1
          clearInterval(interval1)
          return 3
        })
      }, 150)

      const interval2 = setInterval(() => {
        setCount2(prev => {
          if (prev < 3) return prev + 1
          clearInterval(interval2)
          return 3
        })
      }, 150)

      const interval3 = setInterval(() => {
        setCount3(prev => {
          if (prev < 100) return prev + 5
          clearInterval(interval3)
          return 100
        })
      }, 40)

      const interval4 = setInterval(() => {
        setCount4(prev => {
          if (prev < 5000) return prev + 125
          clearInterval(interval4)
          return 5000
        })
      }, 20)
    }
  }, [isVisible])

  const metrics = [
    {
      code: 'METRIC // 01',
      title: t.metrics.clients,
      sub: t.metrics.clientsSub,
      count: `${count1}+`,
      icon: Building2,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      badge: 'Active Accounts'
    },
    {
      code: 'METRIC // 02',
      title: t.metrics.deployments,
      sub: t.metrics.deploymentsSub,
      count: `${count2}+`,
      icon: Rocket,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badge: 'Production Systems'
    },
    {
      code: 'METRIC // 03',
      title: t.metrics.users,
      sub: t.metrics.usersSub,
      count: `${count3}+`,
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      badge: 'Operator Seats'
    },
    {
      code: 'METRIC // 04',
      title: t.metrics.transactions,
      sub: t.metrics.transactionsSub,
      count: `${count4.toLocaleString()}+`,
      icon: Activity,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      badge: 'Sub-second Processing'
    }
  ]

  return (
    <section ref={ref} className={`py-20 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>{t.metrics.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">
            {t.metrics.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t.metrics.subtitle}
          </p>
        </div>

        {/* 4 Cyber Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.code}
                className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Code Index & Pulse Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded">
                      [ {m.code} ]
                    </span>
                    <span className="flex items-center text-[10px] font-mono font-semibold text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* Icon & Label */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-sm ${m.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {m.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        {m.sub}
                      </p>
                    </div>
                  </div>

                  {/* Big Animated Counter */}
                  <div className="my-2">
                    <p className="text-4xl md:text-5xl font-extrabold font-mono text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {m.count}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Badge */}
                <div className="pt-3 mt-4 border-t border-dashed border-gray-100 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>{m.badge}</span>
                  <TrendingUp className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}