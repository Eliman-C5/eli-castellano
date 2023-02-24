import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'

export const ContactSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
      <SectionTitle 
        title={
          isSpanishActive ? 
            'Contacto' : 
            'Contact'
          } 
        // text={
        //   isSpanishActive ?
        //   '':
        //   ''
        // }
      />
    </div>
  )
}
