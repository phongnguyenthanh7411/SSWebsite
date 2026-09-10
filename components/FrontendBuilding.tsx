'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Layout, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function FrontendBuilding() {
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
      tag: 'React & Next.js SSR',
      badgeColor: 'text-cyan-600 bg-cyan-50 border-cyan-100',
      title: '1. High-Performance Web & SEO (React / Next.js)',
      bullets: [
        'Kết hợp linh hoạt giữa Server-Side Rendering (SSR), Static Generation (SSG) và Client Components.',
        'Tối ưu hóa Core Web Vitals, chỉ số Google Lighthouse đạt 95+ và tốc độ tải trang ban đầu cực nhanh.',
        'Kiến trúc App Router hiện đại, phân chia mã nguồn tự động (Code-splitting) và an toàn tầng máy chủ.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Vue.js SPA',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '2. Interactive Single-Page Applications (Vue.js)',
      bullets: [
        'Mô hình phản ứng (Reactivity system) trực quan, gọn nhẹ và dễ dàng bảo trì mở rộng lâu dài.',
        'Xây dựng các dashboard quản trị nghiệp vụ nội bộ (Internal Back-office Tools) phản hồi tức thì.',
        'Tích hợp linh hoạt với các thư viện biểu đồ, bảng dữ liệu nặng (DataGrid) và biểu mẫu đa bước.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Tailwind Design System',
      badgeColor: 'text-sky-600 bg-sky-50 border-sky-100',
      title: '3. Consistent Design Systems & Responsive UI (Tailwind CSS)',
      bullets: [
        'Xây dựng Design System đồng bộ nhận diện thương hiệu từ Typography, Spacing đến Color Palettes.',
        'Giao diện hoàn toàn đáp ứng (Responsive) chuẩn xác trên mọi kích thước màn hình từ Desktop đến Mobile.',
        'Tối ưu hóa dung lượng CSS bằng PurgeCSS, kích thước tải trang CSS nén luôn giữ dưới 15KB.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Flutter & PWA',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '4. Cross-Platform Mobile & Progressive Web Apps (Flutter & PWA)',
      bullets: [
        'Flutter: Viết một lần mã nguồn, xuất bản đồng thời app Native trên iOS và Android với hiệu năng 60/120 FPS.',
        'PWA: Cài đặt trực tiếp từ trình duyệt như app gốc mà không cần qua App Store, chiếm ít bộ nhớ thiết bị.',
        'Tích hợp Push Notification, lưu cache ngoại tuyến và đồng bộ dữ liệu thông minh khi có mạng trở lại.'
      ]
    }
  ] : [
    {
      code: 'MOD // 01',
      tag: 'React & Next.js SSR',
      badgeColor: 'text-cyan-600 bg-cyan-50 border-cyan-100',
      title: '1. High-Performance Web & SEO (React / Next.js)',
      bullets: [
        'Fluid hybrid architecture combining Server-Side Rendering (SSR), Static Generation (SSG), and Client Components.',
        'Optimized Core Web Vitals with 95+ Google Lighthouse scores and instant first-contentful paint.',
        'Modern App Router paradigm with automated code-splitting and server-side secret isolation.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Vue.js SPA',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '2. Interactive Single-Page Applications (Vue.js)',
      bullets: [
        'Intuitive, lightweight reactivity system ensuring clean codebase maintainability and rapid iteration.',
        'Engineered for high-speed internal back-office administration portals and complex operator consoles.',
        'Seamlessly integrates with heavy DataGrid tables, complex multi-step forms, and data visualization libs.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Tailwind Design System',
      badgeColor: 'text-sky-600 bg-sky-50 border-sky-100',
      title: '3. Consistent Design Systems & Responsive UI (Tailwind CSS)',
      bullets: [
        'Cohesive design system standardizing typography, scale, spacing, and corporate brand palettes.',
        'Pixel-perfect responsiveness across all viewport breakpoints from large monitors to smartphones.',
        'Tree-shaken PurgeCSS compilation resulting in ultra-compact gzipped CSS payloads under 15KB.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Flutter & PWA',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '4. Cross-Platform Mobile & Progressive Web Apps (Flutter & PWA)',
      bullets: [
        'Flutter: Single unified codebase compiling to native iOS and Android apps with fluid 60/120 FPS.',
        'PWA: Direct browser installation with zero App Store friction and minimal storage overhead.',
        'Integrated push notifications, offline service workers, and resilient background synchronization.'
      ]
    }
  ]

  const engines = language === 'vi' ? [
    {
      name: 'REACT / NEXT.JS',
      tag: 'SSR & App Router',
      tagColor: 'text-cyan-600 bg-cyan-50',
      desc: 'Framework web số 1 thế giới, tối ưu Core Web Vitals và SEO vượt trội',
      type: 'svg-react'
    },
    {
      name: 'VUE.JS',
      tag: 'Reactive SPAs',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Linh hoạt, nhẹ gọn, phù hợp hoàn hảo cho hệ thống quản trị nội bộ',
      type: 'svg-vue'
    },
    {
      name: 'TAILWIND CSS',
      tag: 'Utility-First CSS',
      tagColor: 'text-sky-600 bg-sky-50',
      desc: 'Xây dựng Design System đồng bộ, tải trang CSS siêu nhỏ dưới 15KB',
      type: 'svg-tailwind'
    },
    {
      name: 'FLUTTER',
      tag: 'Native 120 FPS',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Ứng dụng di động iOS & Android từ một codebase duy nhất mượt mà',
      type: 'svg-flutter'
    },
    {
      name: 'PROGRESSIVE WEB APPS',
      tag: 'Offline-First App',
      tagColor: 'text-purple-600 bg-purple-50',
      desc: 'Cài đặt trực tiếp từ web, Push Notification, không phụ thuộc App Store',
      type: 'svg-pwa'
    }
  ] : [
    {
      name: 'REACT / NEXT.JS',
      tag: 'SSR & App Router',
      tagColor: 'text-cyan-600 bg-cyan-50',
      desc: "World's #1 web framework, optimized Core Web Vitals and stellar SEO performance",
      type: 'svg-react'
    },
    {
      name: 'VUE.JS',
      tag: 'Reactive SPAs',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Lightweight, reactive, ideal for corporate administration dashboards',
      type: 'svg-vue'
    },
    {
      name: 'TAILWIND CSS',
      tag: 'Utility-First CSS',
      tagColor: 'text-sky-600 bg-sky-50',
      desc: 'Cohesive design systems, ultra-lightweight gzipped CSS under 15KB',
      type: 'svg-tailwind'
    },
    {
      name: 'FLUTTER',
      tag: 'Native 120 FPS',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Smooth native mobile apps for iOS & Android from a single codebase',
      type: 'svg-flutter'
    },
    {
      name: 'PROGRESSIVE WEB APPS',
      tag: 'Offline-First App',
      tagColor: 'text-purple-600 bg-purple-50',
      desc: 'Installable web apps, offline caching, push notifications without store fees',
      type: 'svg-pwa'
    }
  ]

  return (
    <section id="frontend" ref={ref} className={`py-20 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-dashed border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
              <Layout className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  [ PILLAR // 03 ]
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-1.5 animate-pulse" />
                  CLIENT INTERFACE & MOBILE RUNTIME
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                FRONTEND & MOBILE ENGINEERING
              </h2>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mt-4 md:mt-0 font-medium">
            {t.pillars.p3Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Architecture Modules */}
          <div className="lg:col-span-7 space-y-5">
            {modules.map((mod) => (
              <div key={mod.code} className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-400 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${mod.badgeColor}`}>
                    {mod.code}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500">{mod.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-teal-600 transition-colors">
                  {mod.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-xs md:text-sm">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: 5 Core Frontend Technologies */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
              <span className="font-mono text-xs font-bold text-foreground">
                [ RUNTIME // 05 FRONTEND STACKS ]
              </span>
              <span className="font-mono text-[10px] text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded">
                WEB & MOBILE RUNTIME
              </span>
            </div>

            {engines.map((eng) => (
              <div key={eng.name} className="flex items-center space-x-4 p-4 bg-white border border-dashed border-gray-300 rounded-xl hover:scale-105 hover:border-teal-400 hover:shadow-md transition-all duration-300 group">
                {eng.type === 'svg-react' && (
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
                      <circle cx="12" cy="12" r="1.8" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-vue' && (
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 3H6L12 13L18 3H22L12 21L2 3Z" fill="#41B883" />
                      <path d="M6.5 3H10L12 6.5L14 3H17.5L12 12.5L6.5 3Z" fill="#35495E" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-tailwind' && (
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-flutter' && (
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.314 0L2.3 12L6.115 15.815L21.928 0H14.314ZM14.314 8.529L7.928 14.914L14.314 21.3H21.928L15.543 14.914L21.928 8.529H14.314Z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-pwa' && (
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 6H20V16H4zM2 18H22V20H2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 10L10 13L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground group-hover:text-teal-600 transition-colors">{eng.name}</span>
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
