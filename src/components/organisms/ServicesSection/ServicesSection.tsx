import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { ServicesCard } from '@/components/molecules/ServicesCard/ServicesCard';
import { servicesTexts } from '@/data/texts';

export const ServicesSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Mis Servicios' : 'My Services'} text='tttrgrg' />
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
      {
        isSpanishActive ?
        servicesTexts.esp.map(card => <ServicesCard key={card.id} text={card.text} title={card.title} src={card.src} />) :
        servicesTexts.eng.map(card => <ServicesCard key={card.id} text={card.text} title={card.title} src={card.src} />)
      }
      </div>
    </div>
  )
}
