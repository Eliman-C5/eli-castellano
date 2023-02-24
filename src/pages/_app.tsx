import { Footer } from '@/components/templates/Footer/Footer'
import { Navbar } from '@/components/templates/Navbar/Navbar'
import { LanguageProvider } from '@/context/LanguageProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <LanguageProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  )
}
