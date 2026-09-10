'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Phone, Mail, Clock, MapPin, X, CheckCircle, XCircle, Send, ShieldCheck, Terminal, ArrowRight, Sparkles, Radio } from 'lucide-react'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'
import AnimatedTitle from '../../components/AnimatedTitle'
import emailjs from '@emailjs/browser'
import { useLanguage } from '@/context/LanguageContext'

// ⚠️ CẤU HÌNH EMAILJS - THAY CÁC GIÁ TRỊ NÀY
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'ctOfxYoMBINmVw_ob',     // 👈 Thay bằng Public Key
  SERVICE_ID: 'service_zepvd8m',          // 👈 Service ID của bạn
  TEMPLATE_ID: 'template_nkpdlll'    // 👈 Thay bằng Template ID
}

// Khởi tạo EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus.type])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Template parameters - phải khớp với template EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Không muốn cung cấp',
        subject: formData.subject,
        message: formData.message
      }

      // Gửi email
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )

      console.log('Email sent successfully:', response)
      
      setSubmitStatus({
        type: 'success',
        message: '✓ Information sent successfully! We will contact you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus({
        type: 'error',
        message: '✗ An error occurred. Please try again or contact us at: sales@sigmasolution.vn'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <AnimatedTitle text="GET IN TOUCH" />

      <section className="py-16 px-6 bg-background relative overflow-hidden">
        {/* Background Ambient Tech Glows */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Cyber Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.contact.badge}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              {t.contact.title}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              {t.contact.subtitle}
            </p>

            {/* SLA Guarantee Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-mono font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200">
                {t.contact.sla1}
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200">
                {t.contact.sla2}
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200">
                {t.contact.sla3}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Cyber Form Terminal */}
            <div className="lg:col-span-7">
              <div className="relative group bg-white border border-dashed border-gray-300 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-600" />

                {/* Form Cyber Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-dashed border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                      {t.contact.terminalTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ENCRYPTED
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-neutral-700 mb-1.5 uppercase">
                        {t.contact.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-neutral-50/50 hover:bg-white text-foreground transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-neutral-700 mb-1.5 uppercase">
                        {t.contact.emailLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-neutral-50/50 hover:bg-white text-foreground transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono font-bold text-neutral-700 mb-1.5 uppercase">
                        {t.contact.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-neutral-50/50 hover:bg-white text-foreground transition-all duration-200"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono font-bold text-neutral-700 mb-1.5 uppercase">
                        {t.contact.subject} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.contact.subjectPlaceholder}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-neutral-50/50 hover:bg-white text-foreground transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-neutral-700 mb-1.5 uppercase">
                      {t.contact.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      rows={5}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-neutral-50/50 hover:bg-white text-foreground transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-6 py-3.5 rounded-xl hover:bg-primary/90 font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-mono">{t.contact.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.submitBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Direct Telemetry Channels & Map */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Hot Channels Card */}
              <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-6 shadow-sm hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-dashed border-gray-200">
                  <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                    {t.contact.channelsTitle}
                  </span>
                  <span className="flex items-center text-[10px] font-mono text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                    LIVE
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Hotline */}
                  <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase block font-semibold">
                        {t.contact.hotlineLabel}
                      </span>
                      <a href="tel:+84946004118" className="text-sm font-bold text-foreground hover:text-primary block font-mono">
                        +84 946 004 118
                      </a>
                      <a href="tel:+84933731709" className="text-xs text-muted-foreground hover:text-primary block font-mono">
                        +84 933 731 709
                      </a>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase block font-semibold">
                        {t.contact.emailLabelContact}
                      </span>
                      <a href="mailto:sales@sigmasolution.vn" className="text-sm font-bold text-primary hover:underline block font-mono">
                        sales@sigmasolution.vn
                      </a>
                      <a href="mailto:phong.nguyen@sigmasolution.vn" className="text-xs text-muted-foreground hover:underline block font-mono">
                        phong.nguyen@sigmasolution.vn
                      </a>
                    </div>
                  </div>

                  {/* Work Hours */}
                  <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase block font-semibold">
                        {t.contact.clockLabel}
                      </span>
                      <p className="text-xs font-semibold text-foreground">
                        {t.contact.clockHours}
                      </p>
                      <span className="text-[10px] text-muted-foreground">{t.contact.clockSub}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Location & Map Node */}
              <div className="bg-white border border-dashed border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 transition-all duration-300">
                <div className="p-5 border-b border-dashed border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h3 className="text-sm font-bold text-foreground">
                        {t.contact.mapTitle}
                      </h3>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono font-semibold text-primary hover:underline inline-flex items-center"
                    >
                      Google Maps &rarr;
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.contact.mapSub}
                  </p>
                </div>

                <div className="h-56 bg-neutral-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.4857236064!2d106.41503199999999!3d10.755292999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {submitStatus.type && (
        <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
          <div className="flex items-start gap-3 py-4 px-5 rounded-2xl shadow-2xl bg-white border border-dashed border-gray-300 w-80">
            {submitStatus.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-1">
                {submitStatus.type === 'success' ? '[ DISPATCH // SUCCESS ]' : '[ DISPATCH // FAILED ]'}
              </p>
              <p className="text-xs text-muted-foreground">
                {submitStatus.message}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitStatus({ type: null, message: '' })}
              className="flex-shrink-0 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <GoToTop />
      <ZaloButton />
    </div>
  )
}
