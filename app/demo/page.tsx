import Header from '../../components/Header'
import GoToTop from '../../components/GoToTop'
import ZaloButton from '../../components/ZaloButton'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Demo() {
  return (
    <div>
      <Header />
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-foreground mb-8">Our Demo</h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Watch our demo video below.
          </p>
          <div className="aspect-video w-full max-w-4xl mx-auto mb-8">
            <iframe
              src="https://www.youtube.com/embed/RQKvvL-ExWA" // Replace with your YouTube video ID
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <div className="text-center">
            <Link href="/contact" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 text-sm font-semibold inline-block">
              <Mail className="inline w-4 h-4 mr-1" />Get Us Now
            </Link>
          </div>
        </div>
      </main>
      <GoToTop />
      <ZaloButton />
    </div>
  )
}