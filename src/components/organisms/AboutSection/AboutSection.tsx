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
            aboutDesc.esp.map(item => <p key={item.id}>{item.text}</p>) :
            aboutDesc.eng.map(item => <p key={item.id}>{item.text}</p>)
        }
        {
          isSpanishActive ?
          <p>Últimamente, he estado creando proyectos usando ReactJS, NextJS, TailwindCSS y Typescript. Me gusta resolver retos en sitios web como <a href="https://www.frontendmentor.io/profile/Eliman-C5" target='_blank' rel='noreferrer'>FrontendMentor</a> y <a href="https://www.hackerrank.com/eliman1926">HackerRank</a>. Actualmente trabajo con una base de clientes independientes y estoy abierto a nuevas oportunidades.</p> :
          <p>Lately, I&apos;ve been creating projects using ReactJS, NextJS, TailwindCSS and Typescript. I like solving challenges on websites like <a href="https://www.frontendmentor.io/profile/Eliman-C5" target='_blank' rel='noreferrer'>FrontendMentor</a> and <a href="https://www.hackerrank.com/eliman1926">HackerRank</a>. I currently work with a freelance client base and am open for new opportunities</p>
        }
        <p>
        {
          isSpanishActive ? 
          'Puede leer más sobre mis habilidades, experiencia y educación en el PDF adjunto a continuación:' : 
          'You can read more about my skills, experience and education in the PDF attached below:'
        }
        </p>
      </div>
      <Button link='https://linkedin.com/eli-castellano/' text={isSpanishActive ? 'Descargar CV' : 'Download CV'} styles='border border-white block w-fit py-3 px-8 hover:bg-white hover:text-black mx-auto' />
    </div>
  )
}
