import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { ExperienceCard } from '@/components/molecules/ExperienceCard/ExperienceCard'

const experience = [
  {
    id: 1,
    direction: 'start',
    date: '2023',
    company: 'Linkedin',
    companyLink: 'https://www.linkedin.com/in/eli-castellano/',
    job: 'Freelancer',
    desc: {
      eng: 'As a freelancer I have done various jobs that have allowed me to improve my skills and work with a large number of clients.',
      esp: 'Como freelancer he realizado diversos trabajos que me han permitido mejorar mis habilidades y trabajar con un gran número de clientes'
    }
  },
  {
    id: 2,
    direction: 'end',
    date: 'Apr 2022 - Jan 2023',
    company: 'Launchy',
    companyLink: 'https://launchy.me/',
    job: 'Frontend Developer',
    desc: {
      eng: 'I worked creating effective web applications for startups. Based on my strong knowledge of front-end technologies and user-friendly design principles, I played a key role in converting creative ideas.',
      esp: 'Trabajé creando aplicaciones web efectivas para empresas emergentes. Basándome en mi sólido conocimiento de las tecnologías front-end y los principios de diseño fáciles de usar, desempeñé un papel clave en la conversión de ideas creativas'
    }
  }
]

export const ExperienceSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
    
      <SectionTitle 
        title={isSpanishActive ? 'Mi experiencia' : 'My experience'} 
      />

      {
        isSpanishActive ?
        <p className='md:text-center mt-5'>Como frontend developer he trabajado en variedad de empresas y proyectos  </p> :
        <p className='md:text-center mt-5'>As a frontend developer I&apos;ve worked on a variety of companies and projects</p>
      }
      
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-8">
        {
          experience.map(item => <ExperienceCard 
            key={item.id} 
            direction={item.direction}
            company={item.company}
            companyLink={item.companyLink}
            desc={item.desc}
            date={item.date}
            job={item.job}
          />)
        }
      </ul>
      
    </div>
  )
}
