'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Award, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CPOBuilding() {
  const { language, t } = useLanguage()
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

  const companies = ['PEPSI CO.', 'AJINOMOTO', 'MASAN GROUP', 'FMCG ENTERPRISES', 'MANUFACTURING']
  const skills = ['System Architecture', 'Data Modeling', 'ETL Pipelines', 'Enterprise Database', 'Performance Tuning', 'Automated Reporting']

  return (
    <section ref={ref} className={`py-16 px-6 bg-muted/50 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 md:p-10 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 overflow-hidden">
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Bio & Tech Dossier */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1 lg:border-r lg:border-dashed lg:border-gray-300 lg:pr-8">
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-200">
                <span className="font-mono text-xs text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  [ DOSSIER // PRODUCT & SYSTEMS ENGINEERING ]
                </span>
                <span className="text-[11px] font-mono text-muted-foreground flex items-center">
                  <Award className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                  SYSTEM ARCHITECT
                </span>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {language === 'vi'
                  ? 'Kỹ sư Dữ liệu và Hệ thống (Data & System Engineer) với hơn 7 năm kinh nghiệm chuyên sâu trong phát triển kiến trúc hệ thống và xây dựng cơ sở dữ liệu lớn cho các tập đoàn đa quốc gia như '
                  : 'Data & System Engineer with over 7 years of specialized experience in systems architecture and large-scale data engineering for multinational corporations such as '}
                <strong className="text-foreground font-semibold">PEPSI, AJINOMOTO, MASAN,...</strong>
                {language === 'vi'
                  ? '. Am hiểu sâu sắc quy trình tổng hợp, làm sạch, tối ưu hóa đường ống dữ liệu (ETL/ELT). Dày dặn kinh nghiệm quản lý và triển khai các mô hình dữ liệu cho tập đoàn sản xuất lớn, xây dựng báo cáo tự động hóa nhằm tối ưu hóa tối đa năng suất lao động cho doanh nghiệp.'
                  : '. Deep expertise in ETL/ELT orchestration, data cleansing, and pipeline optimization. Extensive track record deploying enterprise data models and automated reporting for global manufacturers to maximize operational productivity.'}
              </p>

              {/* Enterprise Experience Tags */}
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
                  {t.team.cpo.companiesLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {companies.map((corp) => (
                    <span key={corp} className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200/60">
                      {corp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Skillset & Technologies */}
              <div className="pt-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
                  {t.team.cpo.skillsLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((tech) => (
                    <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200/60">
                      ⚡ {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Avatar & Identity */}
            <div className="lg:col-span-4 flex flex-col items-center text-center order-1 lg:order-2">
              <div className="relative group/avatar mb-5">
                {/* Glowing Halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/30 to-teal-400/30 rounded-3xl blur-md opacity-70 group-hover/avatar:opacity-100 transition duration-500 animate-pulse" />
                <div className="relative w-44 h-52 md:w-52 md:h-60 rounded-3xl p-1.5 bg-white border-2 border-emerald-400/40 shadow-xl overflow-hidden">
                  <Image
                    src="/media/quoc.png"
                    alt="QUOC DANG - CPO"
                    width={240}
                    height={280}
                    className="w-full h-full object-cover object-top rounded-[1.3rem] transition-transform duration-500 group-hover/avatar:scale-105"
                    priority
                  />
                </div>
                {/* Tech Status Pill */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-900 text-white text-[10px] font-mono px-3 py-0.5 rounded-full border border-neutral-700 flex items-center space-x-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>EXEC // 02</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">QUOC DANG</h3>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-mono text-xs font-bold rounded-full mt-1.5 border border-emerald-200">
                CHIEF PRODUCT OFFICER
              </span>
              <span className="text-xs text-muted-foreground mt-2 font-mono">
                7+ Years Systems & Data Architect
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}