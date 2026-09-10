'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Award, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function SDBuilding() {
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

  const areas = ['RETAIL NETWORKS', 'LOGISTICS & SUPPLY CHAIN', 'ENTERPRISE B2B', 'COMMERCIAL STRATEGY', 'TEAM LEADERSHIP']
  const skills = ['Client Success', 'Strategic Partnerships', 'Solution Consulting', 'Enterprise SLA', 'Business Transformation']

  return (
    <section ref={ref} className={`py-16 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 md:p-10 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all duration-300 overflow-hidden">
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Avatar & Identity */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group/avatar mb-5">
                {/* Glowing Halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 to-purple-400/30 rounded-3xl blur-md opacity-70 group-hover/avatar:opacity-100 transition duration-500 animate-pulse" />
                <div className="relative w-44 h-52 md:w-52 md:h-60 rounded-3xl p-1.5 bg-white border-2 border-indigo-400/40 shadow-xl overflow-hidden">
                  <Image
                    src="/media/sdi.png"
                    alt="VU NGUYEN - SALES DIRECTOR"
                    width={240}
                    height={280}
                    className="w-full h-full object-cover object-top rounded-[1.3rem] transition-transform duration-500 group-hover/avatar:scale-105"
                    priority
                  />
                </div>
                {/* Tech Status Pill */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-900 text-white text-[10px] font-mono px-3 py-0.5 rounded-full border border-neutral-700 flex items-center space-x-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>EXEC // 03</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">VU NGUYEN</h3>
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 font-mono text-xs font-bold rounded-full mt-1.5 border border-indigo-200">
                SALES DIRECTOR
              </span>
              <span className="text-xs text-muted-foreground mt-2 font-mono">
                Commercial Growth & Partnerships
              </span>
            </div>

            {/* Right Column: Bio & Tech Dossier */}
            <div className="lg:col-span-8 space-y-5 lg:border-l lg:border-dashed lg:border-gray-300 lg:pl-8">
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-200">
                <span className="font-mono text-xs text-indigo-700 font-bold uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                  [ DOSSIER // GROWTH & COMMERCIAL OPERATIONS ]
                </span>
                <span className="text-[11px] font-mono text-muted-foreground flex items-center">
                  <Award className="w-3.5 h-3.5 text-indigo-600 mr-1" />
                  STRATEGY LEADER
                </span>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {language === 'vi'
                  ? 'Chuyên gia trong lĩnh vực kinh doanh chiến lược với nhiều năm kinh nghiệm quản trị và phát triển các dự án công nghệ cho nhiều tập đoàn lớn trong các ngành '
                  : 'Strategic sales expert with years of experience managing and growing technology initiatives for major enterprises across '}
                <strong className="text-foreground font-semibold">BÁN LẺ (RETAIL), LOGISTICS & CHUỖI CUNG ỨNG</strong>
                {language === 'vi'
                  ? '. Có thế mạnh vượt trội trong việc xây dựng và phát triển đội ngũ, thấu hiểu bài toán nghiệp vụ của khách hàng để tư vấn các giải pháp số hóa tối ưu nhất, đồng thời thiết lập mối quan hệ hợp tác chiến lược bền vững lâu dài.'
                  : '. Outstanding at team building and development, deeply understanding client business challenges to advise optimal digitalization strategies while forging durable, long-term strategic partnerships.'}
              </p>

              {/* Enterprise Experience Tags */}
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
                  {t.team.sd.areasLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {areas.map((corp) => (
                    <span key={corp} className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200/60">
                      {corp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Skillset & Technologies */}
              <div className="pt-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
                  {t.team.sd.skillsLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((tech) => (
                    <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-200/60">
                      ⚡ {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}