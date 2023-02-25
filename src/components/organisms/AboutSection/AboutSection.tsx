import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { aboutDesc } from '@/data/texts'
import { Button } from '@/components/atoms/Button/Button'

export const AboutSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);
  
  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Acerca de mi' : 'About me'} />
      <div className="mt-8 mb-16">
        {
          isSpanishActive ?
            aboutDesc.esp.map(item =>
              <p key={item.id} className=''>{item.text}</p>) :
            aboutDesc.eng.map(item =>
              <p key={item.id} className=''>{item.text}</p>)
        }
      </div>
      <Button link='https://linkedin.com/eli-castellano/' text={isSpanishActive ? 'Descargar CV' : 'Download CV'} styles='border border-white block w-fit py-3 px-8 hover:bg-white hover:text-black mx-auto' />
    </div>
  )
}
