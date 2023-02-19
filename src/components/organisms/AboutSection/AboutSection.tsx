import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'

export const AboutSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);
  
  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Acerca de mi' : 'About'} text='ddd' />
    </div>
  )
}
