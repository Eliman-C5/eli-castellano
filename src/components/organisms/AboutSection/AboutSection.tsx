import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { aboutDesc } from '@/data/texts'
import { Button } from '@/components/atoms/Button/Button'
import { ImageOfMe } from '@/components/atoms/ImageOfMe/ImageOfMe'

export const AboutSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);
  
  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Acerca de mi' : 'About me'} />
      <ImageOfMe styles='inline-flex justify-center w-full md:hidden' />
      <div className="mt-8 mb-16">
        {
          isSpanishActive ?
            aboutDesc.esp.map(item =>
              <p key={item.id} className=''>{item.text}</p>) :
            aboutDesc.eng.map(item =>
              <p key={item.id} className=''>{item.text}</p>)
        }
      </div>
      <Button link='assets/eli_castellano _frontend_developer.pdf' text={isSpanishActive ? 'Descargar CV' : 'Download CV'} styles='border border-white block w-fit py-3 px-8 hover:bg-white hover:text-black mx-auto' />
    </div>
  )
}
