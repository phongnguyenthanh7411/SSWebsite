'use client'

import { useEffect, useRef, useState } from 'react'
import { Brain, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function AIMLBuilding() {
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
      tag: 'Frontier Cloud LLMs',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      title: '1. Frontier LLM Integration (OpenAI & Anthropic Claude)',
      bullets: [
        'Tích hợp các mô hình ngôn ngữ thông minh nhất thế giới: GPT-4o, Claude 3.5 Sonnet vào quy trình.',
        'Tự động hóa phân tích văn bản, trích xuất dữ liệu hóa đơn, hợp đồng và trợ lý soạn thảo thông minh.',
        'Tối ưu hóa chi phí token với cơ chế Cache Prompt, phân luồng Model Router và Function Calling chuẩn xác.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Private On-Premise GPU',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '2. Private On-Premise AI & Zero Data Leakage (Ollama)',
      bullets: [
        'Triển khai các mô hình mã nguồn mở đỉnh cao (Llama 3, DeepSeek, Mistral) trực tiếp trên máy chủ GPU nội bộ.',
        'Bảo mật dữ liệu 100%: Toàn bộ thông tin kinh doanh, tài chính không bao giờ gửi ra Internet hay bên thứ ba.',
        'Hoạt động độc lập không phụ thuộc kết nối Internet, chi phí cố định không phát sinh theo số lượng truy vấn.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Vector Knowledge RAG',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '3. Enterprise Knowledge Base & RAG (LlamaIndex)',
      bullets: [
        'Hệ thống RAG kết nối trực tiếp kho tài liệu PDF, DOCX, Wiki nội bộ của công ty.',
        'Cơ chế Hybrid Search kết hợp tìm kiếm ngữ nghĩa (Dense Vector) và từ khóa (BM25) triệt tiêu hiện tượng ảo giác.',
        'Cung cấp câu trả lời có trích dẫn nguồn tài liệu cụ thể giúp người dùng kiểm chứng dễ dàng.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Autonomous Agentic Workflow',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '4. Autonomous Multi-Agent Workflows (LangChain)',
      bullets: [
        'Xây dựng mạng lưới AI Agent tự chủ có khả năng tự lập luận, chia nhỏ nhiệm vụ và gọi API hệ thống.',
        'Tương tác trực tiếp với cơ sở dữ liệu qua Text-to-SQL, hỗ trợ hỏi đáp báo cáo bằng ngôn ngữ tự nhiên.',
        'Tự động kích hoạt quy trình nghiệp vụ: gửi email cảnh báo, tạo ticket và cập nhật trạng thái đơn hàng.'
      ]
    }
  ] : [
    {
      code: 'MOD // 01',
      tag: 'Frontier Cloud LLMs',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      title: '1. Frontier LLM Integration (OpenAI & Anthropic Claude)',
      bullets: [
        'Seamlessly integrate global frontier models — GPT-4o and Claude 3.5 Sonnet — into core workflows.',
        'Automated document parsing, invoice & contract extraction, and intelligent drafting assistants.',
        'Token-cost optimization via prompt caching, intelligent model routing, and precise function calling.'
      ]
    },
    {
      code: 'MOD // 02',
      tag: 'Private On-Premise GPU',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '2. Private On-Premise AI & Zero Data Leakage (Ollama)',
      bullets: [
        'Deploy elite open-source models — Llama 3, DeepSeek, Mistral — directly on on-premise GPU servers.',
        '100% data confidentiality: zero sensitive information ever leaves the corporate network.',
        'Fully independent operation with fixed costs that never scale with increasing query volumes.'
      ]
    },
    {
      code: 'MOD // 03',
      tag: 'Vector Knowledge RAG',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
      title: '3. Enterprise Knowledge Base & RAG (LlamaIndex)',
      bullets: [
        'Retrieval-Augmented Generation piped directly over corporate PDF, DOCX, and internal Wiki repositories.',
        'Hybrid search fusing dense semantic vectors and BM25 keywords to sharply curb hallucinations.',
        'Source-cited answers cross-checkable for guaranteed traceability and trust.'
      ]
    },
    {
      code: 'MOD // 04',
      tag: 'Autonomous Agentic Workflow',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: '4. Autonomous Multi-Agent Workflows (LangChain)',
      bullets: [
        'Autonomous AI agent networks with self-reasoning, task decomposition, and direct system API invocations.',
        'Natural-language report generation via Text-to-SQL interactions with corporate databases.',
        'Automated workflows: proactive alerts, ticket creation, and real-time order status updates.'
      ]
    }
  ]

  const engines = language === 'vi' ? [
    {
      name: 'OPENAI',
      tag: 'GPT-4o & Reasoning',
      tagColor: 'text-neutral-800 bg-neutral-100',
      desc: 'GPT-4o, reasoning models o1/o3, Vision, Function Calling',
      type: 'svg-openai'
    },
    {
      name: 'CLAUDE (ANTHROPIC)',
      tag: 'Sonnet 3.5 & 200k',
      tagColor: 'text-amber-700 bg-amber-50',
      desc: 'Lập luận sắc bén, phân tích tài liệu ngữ cảnh khổng lồ 200k context',
      type: 'svg-claude'
    },
    {
      name: 'LANGCHAIN / LANGGRAPH',
      tag: 'Agentic Framework',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Điều phối Agentic AI đa tác vụ, xâu chuỗi logic và tích hợp công cụ',
      type: 'svg-langchain'
    },
    {
      name: 'OLLAMA (LOCAL ON-PREMISE)',
      tag: 'Zero Data Leakage',
      tagColor: 'text-purple-600 bg-purple-50',
      desc: 'Chạy Llama 3, DeepSeek R1 trực tiếp trên GPU nội bộ bảo mật 100%',
      type: 'svg-ollama'
    },
    {
      name: 'LLAMAINDEX',
      tag: 'Vector Data Framework',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'RAG chuyên sâu, tối ưu Vector Search, kết nối dữ liệu tổ chức với LLM',
      type: 'svg-llamaindex'
    }
  ] : [
    {
      name: 'OPENAI',
      tag: 'GPT-4o & Reasoning',
      tagColor: 'text-neutral-800 bg-neutral-100',
      desc: 'GPT-4o, o1/o3 reasoning models, Vision, and function calling',
      type: 'svg-openai'
    },
    {
      name: 'CLAUDE (ANTHROPIC)',
      tag: 'Sonnet 3.5 & 200k',
      tagColor: 'text-amber-700 bg-amber-50',
      desc: 'Sharp reasoning with massive 200k-token context analysis',
      type: 'svg-claude'
    },
    {
      name: 'LANGCHAIN / LANGGRAPH',
      tag: 'Agentic Framework',
      tagColor: 'text-emerald-600 bg-emerald-50',
      desc: 'Orchestrating multi-task Agentic AI and enterprise tool integration',
      type: 'svg-langchain'
    },
    {
      name: 'OLLAMA (LOCAL ON-PREMISE)',
      tag: 'Zero Data Leakage',
      tagColor: 'text-purple-600 bg-purple-50',
      desc: 'Runs Llama 3 and DeepSeek R1 directly on private GPUs with 100% security',
      type: 'svg-ollama'
    },
    {
      name: 'LLAMAINDEX',
      tag: 'Vector Data Framework',
      tagColor: 'text-blue-600 bg-blue-50',
      desc: 'Deeply optimized RAG, vector search, and organizational data connectivity to LLMs',
      type: 'svg-llamaindex'
    }
  ]

  return (
    <section id="ai-ml" ref={ref} className={`py-20 px-6 bg-muted/50 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Tech Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-dashed border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
              <Brain className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  [ PILLAR // 04 ]
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-1.5 animate-pulse" />
                  COGNITIVE MODELS & GENAI ORCHESTRATION
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                AI / MACHINE LEARNING & GENAI
              </h2>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mt-4 md:mt-0 font-medium">
            {t.pillars.p4Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Architecture Modules */}
          <div className="lg:col-span-7 space-y-5">
            {modules.map((mod) => (
              <div key={mod.code} className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${mod.badgeColor}`}>
                    {mod.code}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500">{mod.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-indigo-600 transition-colors">
                  {mod.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-xs md:text-sm">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: 5 Core AI / ML Technologies */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-200">
              <span className="font-mono text-xs font-bold text-foreground">
                [ RUNTIME // 05 AI & ML ENGINES ]
              </span>
              <span className="font-mono text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">
                CLOUD & ON-PREMISE AI
              </span>
            </div>

            {engines.map((eng) => (
              <div key={eng.name} className="flex items-center space-x-4 p-4 bg-white border border-dashed border-gray-300 rounded-xl hover:scale-105 hover:border-indigo-400 hover:shadow-md transition-all duration-300 group">
                {eng.type === 'svg-openai' && (
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6814zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.6069 1.4997-2.602-1.4997z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-claude' && (
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-langchain' && (
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2M17 7h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-ollama' && (
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  </div>
                )}
                {eng.type === 'svg-llamaindex' && (
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4h16v16H4V4zm2 4v8h12V8H6zm3 2h6v1H9v-1zm0 3h4v1H9v-1z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground group-hover:text-indigo-600 transition-colors">{eng.name}</span>
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
