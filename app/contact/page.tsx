'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Phone, Mail, Clock, MapPin, X, CheckCircle, XCircle } from 'lucide-react'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'
import emailjs from '@emailjs/browser'


// ⚠️ CẤU HÌNH EMAILJS - THAY CÁC GIÁ TRỊ NÀY
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'ctOfxYoMBINmVw_ob',     // 👈 Thay bằng Public Key
  SERVICE_ID: 'service_zepvd8m',          // 👈 Service ID của bạn
  TEMPLATE_ID: 'template_nkpdlll'    // 👈 Thay bằng Template ID
}

// Khởi tạo EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

export default function Contact() {
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
    <div>
      <Header />
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold mb-2">Contact us</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch with Our Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions, discuss your project, and help you find the best solutions for your software needs. Reach out to us, and let's start building something great together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Let's Talk About Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="We'll get back to you here"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Let us know who you represent"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help"
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Right side - Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Prefer a Direct Approach?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <a href="tel:+84933731709" className="text-foreground hover:text-primary block">+84 933 731 709</a>
                      <a href="tel:+84946004118" className="text-foreground hover:text-primary block">+84 946 004 118</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <a href="mailto:sales@sigmasolution.vn" className="text-foreground hover:text-primary block">sales@sigmasolution.vn</a>
                      <a href="mailto:phong.nguyen@sigmasolution.vn" className="text-foreground hover:text-primary block">phong.nguyen@sigmasolution.vn</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-foreground">Monday to Saturday, 9AM - 6PM (GMT)</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    Visit Our Office
                  </h3>
                  <p className="text-muted-foreground mb-4">Ho Chi Minh City, Viet Nam</p>
                  <a
                    href="https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
                  >
                    Get a Direction
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="h-64 bg-muted">
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
        <div className="fixed bottom-4 left-4 z-50 animate-fade-in">
          <div className={`flex items-start gap-3 py-4 px-4 rounded-lg shadow-lg bg-white w-64`}>
            {submitStatus.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-1">
                {submitStatus.type === 'success' ? 'Success' : 'Error'}
              </p>
              <p className="text-sm text-muted-foreground">
                {submitStatus.message}
              </p>
            </div>
            <button
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
