import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'

export const ServicesSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Mis Servicios' : 'My Services'} text='tttrgrg' />
    </div>
  )
}
