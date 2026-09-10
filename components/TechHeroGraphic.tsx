'use client'

import Image from 'next/image'
import { Database, Server, Layout, Brain, BarChart3, ShieldCheck, Zap } from 'lucide-react'

export default function TechHeroGraphic() {
  return (
    <div className="relative w-full max-w-[540px] h-[400px] md:h-[430px] flex items-center justify-center select-none">
      {/* Background Ambient Glows */}
      <div className="absolute w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none -top-4 -left-4 animate-pulse" />
      <div className="absolute w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -bottom-4 -right-4 animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* SVG Connecting Circuit Matrix with Data Streams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 540 430">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Diagonal Circuit Lines to 4 Corners */}
        <path d="M 270 215 L 105 85" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 270 215 L 435 85" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 270 215 L 105 345" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 270 215 L 435 345" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 270 215 L 270 45" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Animated Packets Moving Along Paths */}
        <circle r="3" fill="#0284c7" filter="url(#glow)">
          <animateMotion path="M 270 215 L 105 85" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#6366f1" filter="url(#glow)">
          <animateMotion path="M 270 215 L 435 85" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#0ea5e9" filter="url(#glow)">
          <animateMotion path="M 270 215 L 105 345" dur="3.6s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#10b981" filter="url(#glow)">
          <animateMotion path="M 270 215 L 435 345" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#f59e0b" filter="url(#glow)">
          <animateMotion path="M 270 215 L 270 45" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Orbit Rings around Central Logo */}
      <div className="absolute w-56 h-56 rounded-full border border-dashed border-primary/30 animate-spin-slow pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full border border-dashed border-blue-400/20 animate-spin-reverse-slow pointer-events-none" />
      <div className="absolute w-88 h-88 rounded-full border border-dashed border-gray-300/40 pointer-events-none" />

      {/* Central Core: Company Logo */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="relative group">
          {/* Pulsing halo */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-cyan-400 to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
          
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white p-2 shadow-2xl border-2 border-primary/30 flex items-center justify-center">
            <Image
              src="/media/Logo.png"
              alt="Sigma Solution Logo"
              width={86}
              height={86}
              className="rounded-full object-contain"
              priority
            />
          </div>

          {/* Central Status Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-900/90 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold border border-neutral-700 flex items-center space-x-1 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Sigma Core</span>
          </div>
        </div>
      </div>

      {/* Node 1: AI / ML (Top-Left) */}
      <div className="absolute top-4 left-2 md:left-6 z-20 animate-float">
        <div className="bg-white/90 backdrop-blur-md border border-indigo-200 shadow-lg rounded-xl p-2.5 flex items-center space-x-2.5 hover:scale-105 transition-all duration-300 hover:border-indigo-400">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-xs font-bold text-foreground">Enterprise AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            </div>
            <p className="text-[10px] text-muted-foreground">LLM • RAG • Ollama</p>
          </div>
        </div>
      </div>

      {/* Node 2: Backend & APIs (Top-Right) */}
      <div className="absolute top-4 right-2 md:right-6 z-20 animate-float-delayed">
        <div className="bg-white/90 backdrop-blur-md border border-emerald-200 shadow-lg rounded-xl p-2.5 flex items-center space-x-2.5 hover:scale-105 transition-all duration-300 hover:border-emerald-400">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <Server className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-xs font-bold text-foreground">High-Load Backend</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-[10px] text-muted-foreground">FastAPI • .NET • Go</p>
          </div>
        </div>
      </div>

      {/* Node 3: Top-Center BI & Low-Code */}
      <div className="absolute top-[-8px] z-20 animate-float">
        <div className="bg-white/90 backdrop-blur-md border border-amber-200 shadow-md rounded-full px-3 py-1 flex items-center space-x-1.5 text-xs font-semibold text-amber-700">
          <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
          <span>Modern BI & Analytics</span>
        </div>
      </div>

      {/* Node 4: Database Storage (Bottom-Left) */}
      <div className="absolute bottom-6 left-2 md:left-6 z-20 animate-float-delayed">
        <div className="bg-white/90 backdrop-blur-md border border-blue-200 shadow-lg rounded-xl p-2.5 flex items-center space-x-2.5 hover:scale-105 transition-all duration-300 hover:border-blue-400">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-xs font-bold text-foreground">Data Architecture</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </div>
            <p className="text-[10px] text-muted-foreground">SQL • Mongo • Redis</p>
          </div>
        </div>
      </div>

      {/* Node 5: Modern Frontend & Mobile (Bottom-Right) */}
      <div className="absolute bottom-6 right-2 md:right-6 z-20 animate-float">
        <div className="bg-white/90 backdrop-blur-md border border-teal-200 shadow-lg rounded-xl p-2.5 flex items-center space-x-2.5 hover:scale-105 transition-all duration-300 hover:border-teal-400">
          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
            <Layout className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-xs font-bold text-foreground">Web & Mobile UI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
            </div>
            <p className="text-[10px] text-muted-foreground">Next.js • Flutter • PWA</p>
          </div>
        </div>
      </div>

      {/* Bottom Floating Technology Badges */}
      <div className="absolute -bottom-2 z-20 flex items-center space-x-2">
        <div className="bg-neutral-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full border border-neutral-700 flex items-center space-x-1 shadow-md">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>Sub-ms Latency</span>
        </div>
        <div className="bg-neutral-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full border border-neutral-700 flex items-center space-x-1 shadow-md">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Private & Secure</span>
        </div>
      </div>
    </div>
  )
}
