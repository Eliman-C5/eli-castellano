import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'

export const ExperienceSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Experiencia' : 'Experience'} text='dfsdsddssdsdw' />
    </div>
  )
}
