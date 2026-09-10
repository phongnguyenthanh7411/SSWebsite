'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, Cpu, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function WWBBuilding() {
  const { language } = useLanguage()
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

  const beliefs = [
    {
      code: 'BELIEF // 01',
      letter: 'A',
      title: 'ccessibility',
      tag: language === 'vi' ? 'Bình dân hóa công nghệ' : 'Technology for everyone',
      icon: Globe,
      color: 'from-blue-500/20 to-cyan-500/10 text-blue-600',
      description: language === 'vi'
        ? 'Chúng tôi tin rằng mọi doanh nghiệp — bất kể quy mô — đều xứng đáng tiếp cận các giải pháp thông minh, hiện đại để tăng tốc tăng trưởng và mở khóa tiềm năng.'
        : 'We believe every business — no matter its size — deserves access to intelligent, modern solutions that accelerate growth and unlock new possibilities.'
    },
    {
      code: 'BELIEF // 02',
      letter: 'P',
      title: 'roblem-Solving',
      tag: language === 'vi' ? 'Giải pháp thực chất' : 'Solving real problems',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-600',
      description: language === 'vi'
        ? 'Chúng tôi tin vào việc xây dựng sản phẩm giải quyết bài toán thực tế, không chỉ đơn thuần tạo ra tính năng.'
        : 'We believe in building products that solve real problems, not just create features.'
    },
    {
      code: 'BELIEF // 03',
      letter: 'T',
      title: 'ransparency',
      tag: language === 'vi' ? 'Minh bạch & Tin cậy' : 'Transparency & Trust',
      icon: ShieldCheck,
      color: 'from-purple-500/20 to-indigo-500/10 text-purple-600',
      description: language === 'vi'
        ? 'Chúng tôi tin vào sự minh bạch, tinh thần hợp tác và kiến tạo niềm tin qua từng tương tác.'
        : 'We believe in transparency, collaboration, and earning trust through every interaction.'
    },
    {
      code: 'BELIEF // 04',
      letter: 'V',
      title: 'alue Creation',
      tag: language === 'vi' ? 'Giá trị thực tiễn' : 'Practical value',
      icon: Sparkles,
      color: 'from-amber-500/20 to-orange-500/10 text-amber-600',
      description: language === 'vi'
        ? 'Chúng tôi tin rằng công nghệ chỉ thực sự ý nghĩa khi tạo ra giá trị đích thực cho con người.'
        : 'We believe great technology only matters when it creates real value for real people.'
    },
    {
      code: 'BELIEF // 05',
      letter: 'P',
      title: 'artnership',
      tag: language === 'vi' ? 'Đồng hành dài lâu' : 'Long-term partnership',
      icon: Users,
      color: 'from-sky-500/20 to-blue-500/10 text-sky-600',
      description: language === 'vi'
        ? 'Chúng tôi tin vào sự đồng hành — bởi đổi mới sáng tạo diễn ra nhanh hơn khi cùng lớn mạnh với khách hàng.'
        : 'We believe in partnership — because innovation happens faster when we grow together with our customers.'
    }
  ]

  return (
    <section ref={ref} className={`py-16 px-6 bg-muted/50 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {beliefs.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.code}
                className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Hover Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded">
                      [ {b.code} ]
                    </span>
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  <div className="flex items-center space-x-2.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {b.letter}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground leading-tight">
                        {b.letter}{b.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-primary block mt-0.5">{b.tag}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-dashed border-gray-100 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>SIGMA // ETHOS</span>
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