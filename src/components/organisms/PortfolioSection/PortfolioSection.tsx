import React, { useContext, useReducer } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { portfolioText, projects } from '@/data/texts';
import { PortfolioCategories } from '@/components/molecules/PortfolioCategories/PortfolioCategories';
import { filterReducer, State } from '@/reducer/filterReducer';
import { PortfolioProjects } from '@/components/molecules/PortfolioProjects/PortfolioProjects';

export const PortfolioSection = () => {

  const [filter, filterDispatch] = useReducer(filterReducer, projects as State)
  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <>
    
      <SectionTitle 
        title={isSpanishActive ? 'Portafolio' : 'Portfolio'} 
        text={isSpanishActive ? portfolioText.esp : portfolioText.eng}
      />
      
      <PortfolioCategories filterDispatch={filterDispatch} />
      
      <PortfolioProjects filter={filter} />
      
    </>
  )
}
