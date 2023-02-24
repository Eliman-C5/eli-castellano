import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { aboutDesc } from '@/data/texts'
import { Button } from '@/components/atoms/Button/Button'
import { AnimatedWord } from '@/components/atoms/AnimatedWord/AnimatedWord'

export const AboutSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);
  
  return (
    <div>
      <SectionTitle title={isSpanishActive ? 'Acerca de mi' : 'About me'} />
      <div className="mt-8 mb-16">
        {
          isSpanishActive ?
            aboutDesc.esp.map(item =>
              <AnimatedWord key={item.id} text={item.text} className='mt-5' //transition={0.06}
              />) :
            aboutDesc.eng.map(item =>
              <AnimatedWord key={item.id} text={item.text} className='mt-5' //transition={0.06}
              />)
        }
        {
          isSpanishActive ? 
            <AnimatedWord 
              text='Puede leer más sobre mis habilidades, experiencia y educación en el PDF adjunto a continuación:' 
              className='mt-5'
              //transition={0.06}
            /> : 
            <AnimatedWord 
              text='You can read more about my skills, experience and education in the PDF attached below:' 
              className='mt-5'
              //transition={0.06}
            />
        }
      </div>
      <Button link='https://linkedin.com/eli-castellano/' text={isSpanishActive ? 'Descargar CV' : 'Download CV'} styles='border border-white block w-fit py-3 px-8 hover:bg-white hover:text-black mx-auto' />
    </div>
  )
}
