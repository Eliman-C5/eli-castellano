import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { portfolioText, projects } from '@/data/texts';
import { PortfolioProjects } from '@/components/molecules/PortfolioProjects/PortfolioProjects';

export const PortfolioSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <>
    
      <SectionTitle 
        title={isSpanishActive ? 'Portafolio' : 'Portfolio'} 
        text={isSpanishActive ? portfolioText.esp : portfolioText.eng}
      />
      
      <PortfolioProjects portfolio={projects} />
      
    </>
  )
}
