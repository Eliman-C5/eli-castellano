import { Navbar } from '@/components/templates/Navbar/Navbar'
import { StarBackgroundCSS } from '@/components/templates/Wrapper/StarBackgroundCSS'
import { LanguageProvider } from '@/context/LanguageProvider'
import '@/styles/globals.css'
import '@/styles/stars.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <LanguageProvider>
      <StarBackgroundCSS>
        <Navbar />
        <Component {...pageProps} />
      </StarBackgroundCSS>
    </LanguageProvider>
  )
}
