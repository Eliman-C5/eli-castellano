import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/templates/Header/Header'
import { About } from '@/components/templates/About/About'
import { Portfolio } from '@/components/templates/Portfolio/Portfolio'
import { Services } from '@/components/templates/Services/Services'
import { Contact } from '@/components/templates/Contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Eli Castellano</title>
      </Head>
      <main>
        <Header />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  )
}
