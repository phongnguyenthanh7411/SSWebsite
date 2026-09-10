'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, Mail, Phone, ShieldCheck, FileText, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Address() {
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

  return (
    <footer ref={ref} className={`py-16 px-6 bg-muted/50 border-t border-border relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Company Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full bg-white p-1 shadow-md border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/media/Logo.png"
                  alt="Sigma Solution Logo"
                  width={44}
                  height={44}
                  className="rounded-full object-contain"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                  [ ENTERPRISE HQ // APAC ]
                </span>
                <h2 className="text-lg md:text-xl font-extrabold text-foreground mt-1">
                  SIGMA SOLUTION COMPANY LIMITED
                </h2>
              </div>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {t.footer.companyBio}
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white border border-dashed border-gray-300 rounded-xl text-xs text-neutral-700 shadow-sm">
              <FileText className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="font-mono font-semibold">{t.footer.taxLabel}</span>
            </div>
          </div>

          {/* Right Column: Contact Nodes Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Node 1: Address */}
            <div className="bg-white border border-dashed border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">{t.footer.hqTitle}</span>
                  <p className="text-sm font-bold text-foreground">{t.footer.address}</p>
                  <span className="text-[11px] text-muted-foreground">{t.footer.addressSub}</span>
                </div>
              </div>
            </div>

            {/* Node 2: Email */}
            <div className="bg-white border border-dashed border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">{t.footer.email}</span>
                  <a href="mailto:sales@sigmasolution.vn" className="text-sm font-bold text-primary hover:underline">
                    sales@sigmasolution.vn
                  </a>
                  <span className="text-[11px] text-muted-foreground block">{t.footer.emailSub}</span>
                </div>
              </div>
            </div>

            {/* Node 3: Phone */}
            <div className="bg-white border border-dashed border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">{t.footer.hotline}</span>
                  <a href="tel:0946004118" className="text-sm font-bold text-foreground hover:text-primary">
                    0946-004-118
                  </a>
                  <span className="text-[11px] text-muted-foreground block">{t.footer.hotlineSub}</span>
                </div>
              </div>
            </div>

            {/* Node 4: Security SLA */}
            <div className="bg-white border border-dashed border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">{t.footer.sla}</span>
                  <p className="text-sm font-bold text-foreground">{t.footer.slaSub}</p>
                  <span className="text-[11px] text-muted-foreground">{t.footer.slaDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-6 border-t border-dashed border-gray-300 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground space-y-2 sm:space-y-0 font-mono">
          <p>{t.footer.rights}</p>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.footer.operational}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}