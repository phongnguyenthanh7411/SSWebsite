'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BarChart3, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function BILowCodeBuilding() {
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

  const modules = language === 'vi' ? [
    {
      code: 'MOD // 01',
      tag: 'Power BI Dashboards',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-100',
      title: '1. Enterprise BI & Executive Dashboards (Power BI)',
      bullets: [
        'Mô hình hóa dữ liệu chuẩn Star Schema, công thức DAX nâng cao tính toán chỉ số tài chính, doanh thu, hàng tồn.',
        'Báo cáo phân tầng quản trị đa cấp (C-Level, Giám đốc khối, Chi nhánh) với phân quyền bảo mật hàng (RLS).',
        'Cập nhật tự động (Scheduled Refresh) từ nhiều nguồn dữ liệu hỗn hợp (Cloud + On-Premise Gateway).'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Power Automate RPA',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '2. Robotic & Business Process Automation (Power Automate)',
      bullets: [
        'Tự động hóa luồng phê duyệt mua hàng, đề xuất thanh toán, xin nghỉ phép liên phòng ban tức thì.',
        'Tự động đồng bộ dữ liệu giữa ERP, CRM, Email, Microsoft Teams và hệ thống tệp lưu trữ.',
        'Giảm thiểu 90% các tác vụ thủ công lặp lại, loại bỏ sai sót và cảnh báo tức thời khi có sự cố.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Python Data Apps',
      badgeColor: 'text-red-600 bg-red-50 border-red-100',
      title: '3. Data Science & ML Web Apps (Streamlit & Dash)',
      bullets: [
        'Streamlit: Chuyển đổi mã nguồn phân tích Python thành ứng dụng web trực quan chỉ trong vài giờ phát triển.',
        'Dash: Xây dựng bảng điều khiển phân tích chuyên sâu cấp độ nghiên cứu khoa học, tài chính với Plotly.',
        'Cho phép người dùng tương tác với các mô hình học máy: điều chỉnh tham số, dự báo xu hướng và What-If.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'SharePoint Content',
      badgeColor: 'text-teal-600 bg-teal-50 border-teal-100',
      title: '4. Enterprise Content & Collaborative Storage (SharePoint)',
      bullets: [
        'Quản trị vòng đời tài liệu doanh nghiệp, đánh chỉ mục Metadata và quản lý phiên bản chặt chẽ.',
        'Cổng thông tin nội bộ (Intranet Portal) kết nối nhân sự, chính sách, biểu mẫu và quy trình chuẩn hóa.',
        'Tích hợp liền mạch trong hệ sinh thái Microsoft 365, phân quyền kế thừa bảo mật cao.'
      ]
    }
  ] : [
    {
      code: 'MOD // 01',
      tag: 'Power BI Dashboards',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-100',
      title: '1. Enterprise BI & Executive Dashboards (Power BI)',
      bullets: [
        'Canonical Star Schema modeling with advanced DAX for financial, revenue, and inventory KPIs.',
        'Tiered executive dashboards (C-Level, division heads, branches) safeguarded by Row-Level Security.',
        'Automated scheduled refresh across hybrid cloud and on-premise gateway data sources.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Power Automate RPA',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '2. Robotic & Business Process Automation (Power Automate)',
      bullets: [
        'Instant cross-departmental approval automation for purchasing, payments, and leave requests.',
        'Automated data synchronization across ERP, CRM, Email, Teams, and file repositories.',
        'Cuts 90% of repetitive manual effort while eliminating human error and enabling real-time alerts.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Python Data Apps',
      badgeColor: 'text-red-600 bg-red-50 border-red-100',
      title: '3. Data Science & ML Web Apps (Streamlit & Dash)',
      bullets: [
        'Streamlit: Turn Python analytics into interactive web apps in just hours.',
        'Dash: Plotly-powered control panels for scientific, financial, and engineering analytics.',
        'Empowers direct user interaction with ML models: parameter tuning, forecasting, and What-If simulations.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'SharePoint Content',
      badgeColor: 'text-teal-600 bg-teal-50 border-teal-100',
      title: '4. Enterprise Content & Collaborative Storage (SharePoint)',
      bullets: [
        'Enterprise document lifecycle, metadata indexing, and robust version control.',
        'Internal Intranet portals unifying staff, policies, forms, and standardized processes.',
        'Seamless Microsoft 365 ecosystem integration with inherited, high-security permissions.'
      ]
    }
  ]

  const engines = language === 'vi' ? [
    {
      name: 'MICROSOFT POWER BI',
      tag: 'Gartner Leader',
      tagColor: 'text-amber-700 bg-amber-50',
      desc: 'Mô hình hóa DAX, Row-Level Security, Dashboard tương tác đa chiều',
      type: 'image',
      src: '/media/PowerBI.svg'
    },
    {
      name: 'POWER AUTOMATE',
      tag: 'RPA & Cloud Flow',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Tự động hóa luồng quy trình làm việc đám mây và RPA trên máy tính',
      type: 'image',
      src: '/media/powerautomate.svg'
    },
    {
      name: 'STREAMLIT',
      tag: 'Rapid Python UI',
      tagColor: 'text-red-600 bg-red-50',
      desc: 'Ứng dụng web tương tác nhanh cho Khoa học dữ liệu & Machine Learning',
      type: 'svg-streamlit'
    },
    {
      name: 'PLOTLY DASH',
      tag: 'Analytics Framework',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Framework phân tích tài chính chuyên sâu, biểu đồ kỹ thuật Plotly',
      type: 'svg-dash'
    },
    {
      name: 'SHAREPOINT',
      tag: 'Content Management',
      tagColor: 'text-teal-600 bg-teal-50',
      desc: 'Kho lưu trữ tài liệu bảo mật, cổng thông tin nội bộ và siêu dữ liệu',
      type: 'image',
      src: '/media/Sharepoint.svg'
    }
  ] : [
    {
      name: 'MICROSOFT POWER BI',
      tag: 'Gartner Leader',
      tagColor: 'text-amber-700 bg-amber-50',
      desc: 'Advanced DAX modeling, Row-Level Security, multi-dimensional dashboards',
      type: 'image',
      src: '/media/PowerBI.svg'
    },
    {
      name: 'POWER AUTOMATE',
      tag: 'RPA & Cloud Flow',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Cloud workflow automation and on-device robotic process automation (RPA)',
      type: 'image',
      src: '/media/powerautomate.svg'
    },
    {
      name: 'STREAMLIT',
      tag: 'Rapid Python UI',
      tagColor: 'text-red-600 bg-red-50',
      desc: 'Rapid interactive web apps for data science and machine learning',
      type: 'svg-streamlit'
    },
    {
      name: 'PLOTLY DASH',
      tag: 'Analytics Framework',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Advanced financial analytics framework with Plotly visualization',
      type: 'svg-dash'
    },
    {
      name: 'SHAREPOINT',
      tag: 'Content Management',
      tagColor: 'text-teal-600 bg-teal-50',
      desc: 'Secure document repositories, intranet portals, and metadata management',
      type: 'image',
      src: '/media/Sharepoint.svg'
    }
  ]

  return (
    <section id="bi-lowcode" ref={ref} className={`py-20 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-dashed border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm flex-shrink-0">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  [ PILLAR // 05 ]
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse" />
                  ANALYTICS & PROCESS INTELLIGENCE
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                BI & LOW-CODE PLATFORMS
              </h2>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mt-4 md:mt-0 font-medium">
            {t.pillars.p5Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Architecture Modules */}
          <div className="lg:col-span-7 space-y-5">
            {modules.map((mod) => (
              <div key={mod.code} className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${mod.badgeColor}`}>
                    {mod.code}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500">{mod.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-amber-600 transition-colors">
                  {mod.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-xs md:text-sm">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: 5 Core BI & Low-Code Technologies */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
              <span className="font-mono text-xs font-bold text-foreground">
                [ RUNTIME // 05 BI & LOW-CODE STACKS ]
              </span>
              <span className="font-mono text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">
                ENTERPRISE READY
              </span>
            </div>

            {engines.map((eng) => (
              <div key={eng.name} className="flex items-center space-x-4 p-4 bg-white border border-dashed border-gray-300 rounded-xl hover:scale-105 hover:border-amber-400 hover:shadow-md transition-all duration-300 group">
                {eng.type === 'image' && (
                  <div className="w-12 h-12 rounded-xl bg-amber-50/50 flex items-center justify-center flex-shrink-0 p-1">
                    <Image src={eng.src!} alt={eng.name} width={42} height={42} className="object-contain" />
                  </div>
                )}
                {eng.type === 'svg-streamlit' && (
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-dash' && (
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h4v18H3V3zm7 6h4v12h-4V9zm7-4h4v16h-4V5z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground group-hover:text-amber-600 transition-colors">{eng.name}</span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${eng.tagColor}`}>{eng.tag}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{eng.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
