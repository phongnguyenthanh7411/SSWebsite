'use client'

import { useEffect, useState } from 'react'

interface AnimatedTitleProps {
  text: string
}

export default function AnimatedTitle({ text }: AnimatedTitleProps) {
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    if (visibleLetters < text.length) {
      const timer = setTimeout(() => setVisibleLetters(prev => prev + 1), 100)
      return () => clearTimeout(timer)
    } else {
      // All letters visible, wait 2 seconds then reset
      const resetTimer = setTimeout(() => setVisibleLetters(0), 2000)
      return () => clearTimeout(resetTimer)
    }
  }, [visibleLetters, text.length])

  return (
    <h1 className="text-4xl font-bold text-center py-8 text-zinc-500">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${index < visibleLetters ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  )
}