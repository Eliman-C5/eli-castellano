import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { aboutDesc } from '@/data/texts'
import { Button } from '@/components/atoms/Button/Button'
import { ImageOfMe } from '@/components/atoms/ImageOfMe/ImageOfMe'

export const AboutSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);
  
  return (
    <div className='flex flex-col items-center'>
      <SectionTitle title={isSpanishActive ? 'Acerca de mi' : 'About me'} />
      <ImageOfMe styles='flex justify-center w-full md:hidden' />
      <div className="mt-8 mb-16">
        {
          isSpanishActive ?
            aboutDesc.esp.map(item =>
              <p key={item.id} className=''>{item.text}</p>) :
            aboutDesc.eng.map(item =>
              <p key={item.id} className=''>{item.text}</p>)
        }
      </div>
      <Button link='assets/Eli_Castellano_Software_Developer.pdf' text={isSpanishActive ? 'Descargar CV' : 'Download CV'} styles='bg-blue-500 hover:bg-blue-700 text-black border-0' />
    </div>
  )
}
