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
      />

      {
        isSpanishActive ?
        <p className='text-center'>Como frontend developer he trabajado en variedad de proyectos que me permiten ofrecer servicios en sitios como <a href="https://www.fiverr.com/eliman05_" target='_blank' rel='noreferrer' className='gradient-text font-medium'>Fiverr</a></p> :
        <p className='text-center'>As a frontend developer I&apos;ve worked on a variety of projects that allow me to offer services on sites like <a href="https://www.fiverr.com/eliman05_" target='_blank' rel='noreferrer' className='gradient-text font-medium'>Fiverr</a></p>
      }
      
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
