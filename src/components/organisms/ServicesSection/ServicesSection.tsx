import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { ServicesCard } from '@/components/molecules/ServicesCard/ServicesCard';
import { servicesTexts } from '@/data/texts';

export const ServicesSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
      <SectionTitle 
        title={isSpanishActive ? 'Mis servicios' : 'My services'} 
        text={isSpanishActive ?
          "Como frontend developer he trabajado en variedad de proyectos que me permiten ofrecer servicios como:" :
          "As a frontend developer I've worked on a variety of projects that allow me to offer services such as:"
        } 
      />
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
