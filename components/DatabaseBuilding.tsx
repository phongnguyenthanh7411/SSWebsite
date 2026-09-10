'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Database, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function DatabaseBuilding() {
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
      tag: 'ACID & RDBMS',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '1. Relational Database & ACID Transactions',
      bullets: [
        'Thiết kế cấu trúc cơ sở dữ liệu quan hệ chặt chẽ với Microsoft SQL Server và PostgreSQL.',
        'Đảm bảo tính toàn vẹn dữ liệu tuyệt đối (ACID) cho các giao dịch tài chính, kho vận và ERP.',
        'Tối ưu hóa chỉ mục (Indexing), Partitioning và truy vấn phức tạp cho dữ liệu lớn hàng chục triệu bản ghi.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Document NoSQL',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '2. Document & Unstructured Storage (MongoDB)',
      bullets: [
        'Lưu trữ dữ liệu dạng JSON/BSON linh hoạt, phục vụ các mô hình dữ liệu biến đổi nhanh.',
        'Mở rộng theo chiều ngang (Horizontal Sharding) đáp ứng nhu cầu phân tán và tải cao.',
        'Tối ưu cho việc ghi nhận log hệ thống, danh mục sản phẩm thương mại điện tử và dữ liệu IoT.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'In-Memory Cache',
      badgeColor: 'text-red-600 bg-red-50 border-red-100',
      title: '3. In-Memory Caching & Session Store (Redis)',
      bullets: [
        'Bộ nhớ đệm siêu tốc độ (In-memory) phản hồi dưới 1 mili-giây, giảm tải triệt để cho Database chính.',
        'Quản lý phiên đăng nhập (Session Management), hàng đợi xử lý (Pub/Sub) và giới hạn tần suất.',
        'Tích hợp lưu trữ vector tạm thời phục vụ cho các tác vụ Semantic Search của hệ thống AI.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Embedded Engine',
      badgeColor: 'text-sky-600 bg-sky-50 border-sky-100',
      title: '4. Embedded & Offline-First Database (SQLite)',
      bullets: [
        'Cơ sở dữ liệu nhúng siêu nhẹ, zero-configuration cho ứng dụng Desktop, Mobile và thiết bị ngoại biên.',
        'Hỗ trợ tính năng hoạt động ngoại tuyến (Offline-first) với cơ chế đồng bộ hóa hai chiều tin cậy.',
        'Lý tưởng cho lưu trữ cục bộ an toàn trên thiết bị người dùng cuối.'
      ]
    }
  ] : [
    {
      code: 'MOD // 01',
      tag: 'ACID & RDBMS',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '1. Relational Database & ACID Transactions',
      bullets: [
        'Architect robust relational schemas leveraging Microsoft SQL Server and PostgreSQL.',
        'Guarantee full ACID transactional integrity for mission-critical finance, supply chain, and ERP operations.',
        'Optimize indexing, horizontal partitioning, and complex query execution over tens of millions of records.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Document NoSQL',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '2. Document & Unstructured Storage (MongoDB)',
      bullets: [
        'Schema-flexible JSON/BSON document storage tailored for rapidly evolving business models.',
        'Horizontal sharding and replica sets to handle high-throughput distributed workloads.',
        'Highly optimized for system audit logs, enterprise product catalogs, and real-time IoT ingestion.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'In-Memory Cache',
      badgeColor: 'text-red-600 bg-red-50 border-red-100',
      title: '3. In-Memory Caching & Session Store (Redis)',
      bullets: [
        'Sub-millisecond in-memory caching to drastically offload production database clusters.',
        'Centralized session state management, pub/sub event queuing, and granular rate limiting.',
        'Temporary vector indexing for ultra-fast semantic similarity searches in AI pipelines.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Embedded Engine',
      badgeColor: 'text-sky-600 bg-sky-50 border-sky-100',
      title: '4. Embedded & Offline-First Database (SQLite)',
      bullets: [
        'Zero-configuration, lightweight embedded database for desktop, mobile, and edge computing.',
        'Seamless offline-first architecture with resilient two-way synchronization protocols.',
        'Ideal for secure local client-side persistence and sensitive cached state.'
      ]
    }
  ]

  const engines = language === 'vi' ? [
    {
      name: 'SQL SERVER',
      tag: 'Enterprise RDBMS',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'T-SQL, Stored Procedure, AlwaysOn High Availability',
      type: 'image',
      src: '/media/SqlServer.svg'
    },
    {
      name: 'POSTGRESQL',
      tag: 'Advanced Open-Source',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Hỗ trợ JSONB, pgvector cho AI & mở rộng hàm thủ tục',
      type: 'image',
      src: '/media/PostgreSQL.svg'
    },
    {
      name: 'MONGODB',
      tag: 'NoSQL Document',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Linh hoạt cấu trúc BSON, cụm phân tán Horizontal Sharding',
      type: 'svg-mongo'
    },
    {
      name: 'REDIS',
      tag: 'Sub-ms In-Memory',
      tagColor: 'text-red-600 bg-red-50',
      desc: 'Key-Value Caching, Pub/Sub Message Broker, Session Storage',
      type: 'svg-redis'
    },
    {
      name: 'SQLITE',
      tag: 'Embedded Engine',
      tagColor: 'text-sky-600 bg-sky-50',
      desc: 'Serverless, Zero-Config, cơ sở dữ liệu nhúng cho Client & Mobile',
      type: 'svg-sqlite'
    }
  ] : [
    {
      name: 'SQL SERVER',
      tag: 'Enterprise RDBMS',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'T-SQL, Stored Procedures, AlwaysOn High Availability',
      type: 'image',
      src: '/media/SqlServer.svg'
    },
    {
      name: 'POSTGRESQL',
      tag: 'Advanced Open-Source',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Native JSONB, pgvector for AI, and advanced procedural extensions',
      type: 'image',
      src: '/media/PostgreSQL.svg'
    },
    {
      name: 'MONGODB',
      tag: 'NoSQL Document',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Flexible BSON schemas, distributed horizontal clustering & sharding',
      type: 'svg-mongo'
    },
    {
      name: 'REDIS',
      tag: 'Sub-ms In-Memory',
      tagColor: 'text-red-600 bg-red-50',
      desc: 'Key-Value Caching, Pub/Sub Message Broker, Session Storage',
      type: 'svg-redis'
    },
    {
      name: 'SQLITE',
      tag: 'Embedded Engine',
      tagColor: 'text-sky-600 bg-sky-50',
      desc: 'Serverless, zero-config, embedded database for desktop & mobile apps',
      type: 'svg-sqlite'
    }
  ]

  return (
    <section id="database" ref={ref} className={`py-20 px-6 bg-background relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-dashed border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
              <Database className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  [ PILLAR // 01 ]
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse" />
                  DATA PERSISTENCE & CACHE ENGINE
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                DATABASE ARCHITECTURE
              </h2>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mt-4 md:mt-0 font-medium">
            {t.pillars.p1Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Architecture Modules */}
          <div className="lg:col-span-7 space-y-5">
            {modules.map((mod) => (
              <div key={mod.code} className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${mod.badgeColor}`}>
                    {mod.code}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500">{mod.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {mod.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-xs md:text-sm">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: 5 Core Database Engines */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
              <span className="font-mono text-xs font-bold text-foreground">
                [ ENGINES // 05 DATA STACKS ]
              </span>
              <span className="font-mono text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                ON-PREMISE & CLOUD
              </span>
            </div>

            {engines.map((eng) => (
              <div key={eng.name} className="flex items-center space-x-4 p-4 bg-white border border-dashed border-gray-300 rounded-xl hover:scale-105 hover:border-blue-400 hover:shadow-md transition-all duration-300 group">
                {eng.type === 'image' && (
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center flex-shrink-0 p-1">
                    <Image src={eng.src!} alt={eng.name} width={42} height={42} className="object-contain" />
                  </div>
                )}
                {eng.type === 'svg-mongo' && (
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C11.5 2 11 3.5 11 5.5C11 11.5 7 14 7 17C7 20 9 22 12 22C15 22 17 20 17 17C17 14 13 11.5 13 5.5C13 3.5 12.5 2 12 2Z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-redis' && (
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-sqlite' && (
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 6C4 4.34 7.58 3 12 3C16.42 3 20 4.34 20 6C20 7.66 16.42 9 12 9C7.58 9 4 7.66 4 6ZM4 10C4 11.66 7.58 13 12 13C16.42 13 20 11.66 20 10V14C20 15.66 16.42 17 12 17C7.58 17 4 15.66 4 14V10ZM4 18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V18C20 19.66 16.42 21 12 21C7.58 21 4 19.66 4 18Z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground group-hover:text-blue-600 transition-colors">{eng.name}</span>
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
