'use client'

import { useEffect, useState } from 'react'

interface AnimatedWordProps {
  word: string
}

export default function AnimatedWord({ word }: AnimatedWordProps) {
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    if (visibleLetters < word.length) {
      const timer = setTimeout(() => setVisibleLetters(prev => prev + 1), 50)
      return () => clearTimeout(timer)
    }
  }, [visibleLetters, word.length])

  return (
    <span>
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${index < visibleLetters ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}