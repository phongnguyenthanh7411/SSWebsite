'use client'

import Image from 'next/image'

export default function ZaloButton() {


  return (



    <button
      onClick={() => window.open('https://zalo.me/990141976725892449', '_blank')}
      className="fixed bottom-4 right-4 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center p-2"
      aria-label="Contact via Zalo"
    >
      <Image src="/media/ZALO.png" alt="Zalo" width={64} height={64} className="object-contain" />
    </button>
  )
}