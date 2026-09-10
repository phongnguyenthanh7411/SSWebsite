'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Server, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function BackendBuilding() {
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
      tag: 'Golang Microservices',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '1. High-Concurrency & Microservices (Golang)',
      bullets: [
        'Tận dụng Goroutines xử lý hàng trăm nghìn kết nối đồng thời với lượng RAM tiêu thụ tối thiểu.',
        'Biên dịch nhị phân trực tiếp (Binary compiled), tốc độ khởi động tức thì và hiệu suất tiệm cận C/C++.',
        'Lý tưởng cho các dịch vụ cổng thanh toán, API Gateway, Message Broker và phân tán dữ liệu thời gian thực.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'C# / .NET Enterprise',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '2. Enterprise Standard & Clean Architecture (C# / .NET)',
      bullets: [
        'Nền tảng vững chắc hàng đầu cho hệ thống ERP, Core Banking, kế toán và quy trình nghiệp vụ lớn.',
        'Áp dụng Domain-Driven Design (DDD), Clean Architecture, CQRS và Entity Framework Core tối ưu.',
        'Bảo mật đa tầng theo tiêu chuẩn Microsoft Enterprise, phân quyền chi tiết và quản lý Identity tập trung.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Node.js Real-Time',
      badgeColor: 'text-green-600 bg-green-50 border-green-100',
      title: '3. Event-Driven & Real-Time Communications (Node.js)',
      bullets: [
        'Kiến trúc Event Loop non-blocking I/O tối ưu cho các tác vụ I/O nặng và streaming dữ liệu.',
        'Tích hợp WebSocket thời gian thực cho chat nội bộ, thông báo trạng thái tức thì và dashboard cập nhật sống.',
        'Hệ sinh thái NPM khổng lồ giúp tăng tốc thời gian phát triển và tích hợp các dịch vụ bên thứ ba.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Python & FastAPI',
      badgeColor: 'text-teal-600 bg-teal-50 border-teal-100',
      title: '4. Asynchronous High-Speed API & AI Glue (Python & FastAPI)',
      bullets: [
        'FastAPI dựa trên Starlette và Pydantic cho tốc độ xử lý API ngang ngửa NodeJS và Go.',
        'Tự động sinh tài liệu chuẩn tương tác OpenAPI / Swagger, kiểm tra kiểu dữ liệu tĩnh nghiêm ngặt.',
        'Cầu nối hoàn hảo giữa tầng nghiệp vụ Backend và các pipeline Trí tuệ Nhân tạo / Học máy (AI/ML).'
      ]
    }
  ] : [
    {
      code: 'MOD // 01',
      tag: 'Golang Microservices',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '1. High-Concurrency & Microservices (Golang)',
      bullets: [
        'Leverage lightweight Goroutines to handle hundreds of thousands of concurrent connections with minimal memory.',
        'Compiled native binaries providing instant cold starts and near-C/C++ runtime performance.',
        'Ideal for fintech payment gateways, high-throughput API gateways, and real-time event brokers.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'C# / .NET Enterprise',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '2. Enterprise Standard & Clean Architecture (C# / .NET)',
      bullets: [
        'Robust enterprise backbone for mission-critical ERP, core finance, and corporate workflows.',
        'Implements Domain-Driven Design (DDD), Clean Architecture, CQRS, and highly tuned EF Core.',
        'Enterprise Microsoft security, granular role-based permissions, and centralized Identity management.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Node.js Real-Time',
      badgeColor: 'text-green-600 bg-green-50 border-green-100',
      title: '3. Event-Driven & Real-Time Communications (Node.js)',
      bullets: [
        'Non-blocking I/O Event Loop architecture optimized for intensive data streaming and I/O.',
        'Full-duplex WebSocket real-time communication for live status notifications and dynamic dashboards.',
        'Vast NPM ecosystem accelerating rapid development cycles and modular third-party integrations.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Python & FastAPI',
      badgeColor: 'text-teal-600 bg-teal-50 border-teal-100',
      title: '4. Asynchronous High-Speed API & AI Glue (Python & FastAPI)',
      bullets: [
        'Starlette & Pydantic-powered ASGI framework delivering throughput rivaling Node.js and Go.',
        'Automatic interactive OpenAPI / Swagger documentation and strict static type validation.',
        'The ideal bridge connecting business logic to Machine Learning pipelines and AI inference engines.'
      ]
    }
  ]

  const engines = language === 'vi' ? [
    {
      name: 'PYTHON',
      tag: 'AI & Data Glue',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Xử lý dữ liệu nâng cao, kết nối mô hình học máy, tự động hóa',
      type: 'svg-python'
    },
    {
      name: 'C# / .NET CORE',
      tag: 'Enterprise Grade',
      tagColor: 'text-purple-600 bg-purple-50',
      desc: 'ASP.NET Core Web API, Entity Framework, Domain-Driven Design',
      type: 'image',
      src: '/media/DN.svg'
    },
    {
      name: 'NODE.JS',
      tag: 'Async Non-blocking',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Event Loop, WebSocket streaming dữ liệu, hệ sinh thái NPM phong phú',
      type: 'image',
      src: '/media/NJ.svg'
    },
    {
      name: 'FASTAPI',
      tag: 'High-Speed ASGI',
      tagColor: 'text-teal-600 bg-teal-50',
      desc: 'Tự động sinh OpenAPI Swagger, xác thực Pydantic, tốc độ vượt trội',
      type: 'image',
      src: '/media/FA.svg'
    },
    {
      name: 'GOLANG',
      tag: 'Goroutine Concurrency',
      tagColor: 'text-cyan-600 bg-cyan-50',
      desc: 'Siêu tải hàng trăm nghìn kết nối, tiêu thụ ít RAM, khởi động tức thì',
      type: 'image',
      src: '/media/GL.svg'
    }
  ] : [
    {
      name: 'PYTHON',
      tag: 'AI & Data Glue',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Advanced data engineering, machine learning pipelines, system automation',
      type: 'svg-python'
    },
    {
      name: 'C# / .NET CORE',
      tag: 'Enterprise Grade',
      tagColor: 'text-purple-600 bg-purple-50',
      desc: 'ASP.NET Core Web API, Entity Framework, Domain-Driven Design',
      type: 'image',
      src: '/media/DN.svg'
    },
    {
      name: 'NODE.JS',
      tag: 'Async Non-blocking',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Event Loop, real-time WebSocket data streaming, rich NPM ecosystem',
      type: 'image',
      src: '/media/NJ.svg'
    },
    {
      name: 'FASTAPI',
      tag: 'High-Speed ASGI',
      tagColor: 'text-teal-600 bg-teal-50',
      desc: 'Automated OpenAPI Swagger docs, Pydantic type safety, ultra-fast ASGI',
      type: 'image',
      src: '/media/FA.svg'
    },
    {
      name: 'GOLANG',
      tag: 'Goroutine Concurrency',
      tagColor: 'text-cyan-600 bg-cyan-50',
      desc: 'Massive concurrency, tiny memory footprint, instantaneous cold starts',
      type: 'image',
      src: '/media/GL.svg'
    }
  ]

  return (
    <section id="backend" ref={ref} className={`py-20 px-6 bg-muted/50 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-dashed border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
              <Server className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  [ PILLAR // 02 ]
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  DISTRIBUTED LOGIC & HIGH-LOAD APIS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                BACKEND ARCHITECTURE & APIS
              </h2>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mt-4 md:mt-0 font-medium">
            {t.pillars.p2Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Architecture Modules */}
          <div className="lg:col-span-7 space-y-5">
            {modules.map((mod) => (
              <div key={mod.code} className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${mod.badgeColor}`}>
                    {mod.code}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500">{mod.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-emerald-600 transition-colors">
                  {mod.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-xs md:text-sm">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: 5 Core Backend Technologies */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
              <span className="font-mono text-xs font-bold text-foreground">
                [ RUNTIME // 05 BACKEND STACKS ]
              </span>
              <span className="font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                MICROSERVICES & APIS
              </span>
            </div>

            {engines.map((eng) => (
              <div key={eng.name} className="flex items-center space-x-4 p-4 bg-white border border-dashed border-gray-300 rounded-xl hover:scale-105 hover:border-emerald-400 hover:shadow-md transition-all duration-300 group">
                {eng.type === 'svg-python' && (
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.92 2C6.99 2 7.15 4.14 7.15 4.14L7.16 6.36H12.03V7.07H5.21C5.21 7.07 2 6.71 2 11.66C2 16.61 4.8 16.36 4.8 16.36H6.46V14.03C6.46 14.03 6.37 11.23 9.21 11.23H14.03V11.22C14.03 11.22 16.63 11.22 16.63 8.65V4.14C16.63 4.14 16.85 2 11.92 2ZM9.4 3.47C9.9 3.47 10.3 3.88 10.3 4.38C10.3 4.88 9.9 5.28 9.4 5.28C8.9 5.28 8.5 4.88 8.5 4.38C8.5 3.88 8.9 3.47 9.4 3.47ZM12.08 22C17.01 22 16.85 19.86 16.85 19.86L16.84 17.64H11.97V16.93H18.79C18.79 16.93 22 17.29 22 12.34C22 7.39 19.2 7.64 19.2 7.64H17.54V9.97C17.54 9.97 17.63 12.77 14.79 12.77H9.97V12.78C9.97 12.78 7.37 12.78 7.37 15.35V19.86C7.37 19.86 7.15 22 12.08 22ZM14.6 20.53C14.1 20.53 13.7 20.12 13.7 19.62C13.7 19.12 14.1 18.72 14.6 18.72C15.1 18.72 15.5 19.12 15.5 19.62C15.5 20.12 15.1 20.53 14.6 20.53Z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'image' && (
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center flex-shrink-0 p-1">
                    <Image src={eng.src!} alt={eng.name} width={40} height={40} className="object-contain" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground group-hover:text-emerald-600 transition-colors">{eng.name}</span>
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
