'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown, ShieldCheck, Terminal, ArrowRight, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react'
import Header from '../../components/Header'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'
import AnimatedTitle from '../../components/AnimatedTitle'
import { useLanguage } from '@/context/LanguageContext'

export default function FAQs() {
  const { language, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({ 0: true, 1: true })
  const [activeCategory, setActiveCategory] = useState<string>('all')
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqs = language === 'vi' ? [
    {
      code: 'FAQ // 01',
      category: 'architecture',
      categoryLabel: 'Kiến trúc & Công nghệ',
      question: 'Sigma Solution cung cấp những dịch vụ công nghệ nào?',
      answer: 'Sigma Solution cung cấp giải pháp công nghệ Full-Stack, Dữ liệu và AI toàn diện qua 5 trụ cột cốt lõi: Kiến trúc Cơ sở dữ liệu (SQL Server, PostgreSQL, MongoDB, Redis, SQLite), Backend Hiệu năng cao (Python, C# / .NET, Node.js, FastAPI, Golang), Frontend & Mobile Hiện đại (React/Next.js, Vue.js, Tailwind, Flutter, PWA), Trí tuệ Nhân tạo & LLMs (OpenAI, Claude, LangChain, Ollama, LlamaIndex), và Business Intelligence & Tự động hóa (Power BI, Power Automate, Streamlit, Dash, SharePoint).',
      tags: ['Full-Stack', 'Data Architecture', 'Enterprise AI', 'Modern BI']
    },
    {
      code: 'FAQ // 02',
      category: 'onboarding',
      categoryLabel: 'Quy trình tư vấn & Hợp tác',
      question: 'Làm thế nào để bắt đầu hợp tác hoặc triển khai dự án?',
      answer: 'Quý khách có thể liên hệ trực tiếp qua website, hotline hoặc email. Đội ngũ kỹ sư trưởng của chúng tôi sẽ lên lịch tư vấn kỹ thuật ngay lập tức để khảo sát nhu cầu, phân tích kiến trúc hiện tại và đề xuất lộ trình giải pháp tối ưu kèm demo kỹ thuật cụ thể.',
      tags: ['Khảo sát nhu cầu', 'Tư vấn kỹ thuật', 'Lộ trình Agile']
    },
    {
      code: 'FAQ // 03',
      category: 'onboarding',
      categoryLabel: 'Chuyển giao & Đào tạo',
      question: 'Bên bạn có đào tạo và chuyển giao công nghệ cho đội ngũ nội bộ không?',
      answer: 'Có. Chúng tôi cung cấp các phiên chuyển giao tri thức toàn diện, bàn giao đầy đủ tài liệu kiến trúc chuẩn mực và đào tạo thực hành cho đội ngũ lập trình viên cũng như quản trị viên nội bộ của quý doanh nghiệp để tự chủ vận hành 100%.',
      tags: ['Đào tạo quản trị', 'Bàn giao mã nguồn', 'Tài liệu kiến trúc']
    },
    {
      code: 'FAQ // 04',
      category: 'architecture',
      categoryLabel: 'Lĩnh vực chuyên sâu',
      question: 'Sigma Solution phục vụ các ngành nghề và lĩnh vực nào?',
      answer: 'Chúng tôi phục vụ đa dạng các lĩnh vực có yêu cầu hệ thống cao như Chuỗi bán lẻ (Retail), Bất động sản, E-commerce, Logistics & Chuỗi cung ứng, Sản xuất và Y tế. Mọi giải pháp đều được may đo tương thích hoàn hảo với hệ sinh thái ERP và quy trình sẵn có.',
      tags: ['Bán lẻ', 'Bất động sản', 'Logistics', 'Sản xuất']
    },
    {
      code: 'FAQ // 05',
      category: 'deployment',
      categoryLabel: 'Thời gian & Lộ trình',
      question: 'Thời gian triển khai một dự án công nghệ thường kéo dài bao lâu?',
      answer: 'Thời gian triển khai tùy thuộc vào quy mô bài toán. Các phân hệ báo cáo BI và module chuẩn thường hoàn thành trong 2-4 tuần; trong khi các nền tảng Full-Stack toàn diện hoặc tích hợp Private AI thường triển khai trong 4-12 tuần theo phương pháp Agile bàn giao liên tục.',
      tags: ['Agile Sprints', '2-12 Tuần', 'Bàn giao liên tục']
    },
    {
      code: 'FAQ // 06',
      category: 'security',
      categoryLabel: 'Bảo mật & Tuân thủ',
      question: 'Làm thế nào để các bạn đảm bảo an ninh dữ liệu và tuân thủ bảo mật?',
      answer: 'Chúng tôi tuân thủ các tiêu chuẩn an ninh đa tầng: Phân quyền vai trò chi tiết (RBAC), mã hóa dữ liệu end-to-end khi truyền tải và lưu trữ, môi trường triển khai cô lập, và giải pháp Private AI On-Premise (Ollama) đảm bảo dữ liệu mật của công ty không bao giờ lọt ra ngoài.',
      tags: ['Private On-Premise AI', 'Mã hóa End-to-End', 'RBAC', 'Zero Data Leakage']
    },
    {
      code: 'FAQ // 07',
      category: 'deployment',
      categoryLabel: 'Bảo trì & Cam kết SLA',
      question: 'Sigma Solution có hỗ trợ bảo trì và bảo hành dài hạn không?',
      answer: 'Có. Chúng tôi cung cấp các gói hỗ trợ vận hành dài hạn bao gồm giám sát hệ thống chủ động 24/7, tối ưu hóa hiệu năng, cập nhật bản vá bảo mật, mở rộng tải microservices và cam kết SLA 99.9% đảm bảo hệ thống vận hành liên tục.',
      tags: ['SLA 99.9%', 'Giám sát 24/7', 'Vá bảo mật', 'Tối ưu hiệu năng']
    }
  ] : [
    {
      code: 'FAQ // 01',
      category: 'architecture',
      categoryLabel: 'Architecture & Stack',
      question: 'What services does Sigma Solution offer?',
      answer: 'Sigma Solution provides end-to-end Full-Stack technology, Data, and AI solutions across 5 core pillars: Database Architecture (SQL Server, PostgreSQL, MongoDB, Redis, SQLite), High-Performance Backend (Python, C# / .NET, Node.js, FastAPI, Golang), Modern Frontend & Mobile (React/Next.js, Vue.js, Tailwind, Flutter, PWA), AI/ML & LLM Engineering (OpenAI, Claude, LangChain, Ollama, LlamaIndex), and Business Intelligence & Low-Code (Power BI, Power Automate, Streamlit, Dash, SharePoint).',
      tags: ['Full-Stack', 'Data Architecture', 'Enterprise AI', 'Modern BI']
    },
    {
      code: 'FAQ // 02',
      category: 'onboarding',
      categoryLabel: 'Consultation & Process',
      question: 'How can I get started with your services?',
      answer: 'Contact us through our website, hotline or email. We will promptly schedule a comprehensive technical consultation to analyze your business architecture, identify performance bottlenecks, and design a customized, scalable solution with an actionable implementation roadmap.',
      tags: ['Requirement Audit', 'Technical Scope', 'Agile Roadmap']
    },
    {
      code: 'FAQ // 03',
      category: 'onboarding',
      categoryLabel: 'Knowledge Transfer',
      question: 'Do you provide training for your solutions?',
      answer: 'Yes. We provide complete knowledge transfer sessions, comprehensive architecture documentation, and ongoing hands-on training for your internal developers and administrators to ensure your team can operate, maintain, and expand the systems with full autonomy.',
      tags: ['Admin Training', 'Dev Handover', 'System Docs']
    },
    {
      code: 'FAQ // 04',
      category: 'architecture',
      categoryLabel: 'Industry Solutions',
      question: 'What industries do you serve?',
      answer: 'We serve diverse industries with stringent system demands including Retail Chains, E-commerce, Real Estate, Logistics & Supply Chain, Manufacturing, and Healthcare. Our solutions are custom-architected to seamlessly integrate with your existing ERPs and operational workflows.',
      tags: ['Retail', 'Real Estate', 'Logistics', 'FMCG']
    },
    {
      code: 'FAQ // 05',
      category: 'deployment',
      categoryLabel: 'Project Timelines',
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary depending on project complexity. Standard modular components and BI dashboards are typically delivered within 2-4 weeks, while comprehensive enterprise Full-Stack platforms and Private AI integrations usually complete within 4-12 weeks with continuous Agile sprint releases.',
      tags: ['Agile Sprints', '2-12 Weeks', 'Continuous Delivery']
    },
    {
      code: 'FAQ // 06',
      category: 'security',
      categoryLabel: 'Security & Compliance',
      question: 'How do you ensure security and compliance?',
      answer: 'We adhere to enterprise security standards across all layers: Role-Based Access Control (RBAC), end-to-end data encryption in transit and at rest, isolated environments, private on-premise AI deployments (via Ollama) to keep sensitive company knowledge strictly confidential, and comprehensive audit trails.',
      tags: ['Private On-Premise AI', 'End-to-End Encryption', 'RBAC', 'Zero Data Leakage']
    },
    {
      code: 'FAQ // 07',
      category: 'deployment',
      categoryLabel: 'Maintenance & SLA',
      question: 'Do you provide maintenance and long-term support?',
      answer: 'Yes. We offer comprehensive long-term support packages including proactive system monitoring, performance tuning, security patches, microservice scaling, and technical training to ensure your entire technology stack operates at peak reliability.',
      tags: ['SLA 99.9%', '24/7 Monitoring', 'Security Patches', 'System Tuning']
    }
  ]

  const categories = [
    { id: 'all', label: t.faqs.all },
    { id: 'architecture', label: t.faqs.architecture },
    { id: 'security', label: t.faqs.security },
    { id: 'deployment', label: t.faqs.deployment },
    { id: 'onboarding', label: t.faqs.onboarding }
  ]

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === activeCategory)

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <AnimatedTitle text="FREQUENTLY ASKED QUESTIONS" />

      <section ref={ref} className={`py-16 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Ambient Tech Glow Elements */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Cyber Header Tag */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.faqs.badge}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">
              {t.faqs.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t.faqs.subtitle}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-neutral-600 border-gray-200 hover:border-primary/50 hover:bg-neutral-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Cyber Accordion Cards */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = !!openItems[index]
              return (
                <div
                  key={faq.code}
                  className="relative group bg-white border border-dashed border-gray-300 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Top Hover Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                  {/* Header / Clickable Button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 md:p-6 text-left flex items-start justify-between space-x-4 select-none focus:outline-none"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          [ {faq.code} ]
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-start">
                        <span className="text-primary font-mono mr-2">Q.</span>
                        <span>{faq.question}</span>
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary text-white border-primary' : 'bg-neutral-50 text-neutral-600 group-hover:border-primary'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6 pt-1 border-t border-dashed border-gray-100 animate-fade-in">
                      <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-600 mb-2 font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>[ RESPONSE // VERIFIED KERNEL ]</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pl-5 border-l-2 border-primary/40 mb-4">
                        {faq.answer}
                      </p>

                      {/* Technology / Topic Tags */}
                      <div className="flex flex-wrap gap-1.5 pl-5">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200/70"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom Telemetry Direct Help Node */}
          <div className="mt-12 bg-white border border-dashed border-gray-300 rounded-2xl p-6 md:p-8 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold bg-primary/10 px-2.5 py-1 rounded border border-primary/20 inline-block mb-3">
              {t.faqs.directLine}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              {t.faqs.askPrompt}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto mb-5">
              {t.faqs.askSub}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="/contact"
                className="bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm flex items-center space-x-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.faqs.btnContact}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoToTop />
      <ZaloButton />
    </div>
  )
}