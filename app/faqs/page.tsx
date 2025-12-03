'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'
import AnimatedTitle from '../../components/AnimatedTitle'

export default function FAQs() {
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

  const faqs = [
    {
      question: 'What services does Sigma Solution offer?',
      answer: 'Sigma Solution specializes in Microsoft 365 platform solutions, including application development, data management, automation, and AI integration to enhance business efficiency.'
    },
    {
      question: 'How can I get started with your services?',
      answer: 'Contact us through our website or email. We\'ll schedule a consultation to understand your needs and provide a tailored solution.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we offer comprehensive training and ongoing support to ensure your team can effectively use and maintain the implemented solutions.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve various industries including healthcare, finance, retail, and manufacturing, adapting our solutions to meet specific industry requirements.'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary based on project complexity, but most projects are completed within 4-12 weeks, including testing and deployment.'
    },
    {
      question: 'How do you ensure security and compliance?',
      answer: 'We follow Microsoft\'s security standards, including role-based access control, environment separation, data loss prevention (DLP) policies, audit logs, and secure API integration.'
    },
    {
      question: 'Do you provide maintenance and long-term support?',
      answer: 'Yes. We offer ongoing support packages including updates, enhancements, monitoring, bug fixes, and admin training to ensure your Power Platform solution continues to deliver value.'
    }
  ]

  return (
    <div>
      <Header />
      <AnimatedTitle text="FREQUENTLY ASKED QUESTIONS" />
      <section ref={ref} className={`py-16 px-6 bg-background ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-card-foreground mb-3">{faq.question}</h2>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoToTop />
      <ZaloButton />
    </div>
  )
}