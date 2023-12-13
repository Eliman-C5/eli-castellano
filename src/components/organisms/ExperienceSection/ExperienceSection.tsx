import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { ExperienceCard } from '@/components/molecules/ExperienceCard/ExperienceCard'

const experience = [
  {
    id: 1,
    direction: 'start',
    date: '2021',
    company: 'Launchy',
    desc: {
      eng: 'd',
      esp: 'd'
    }
  },
  {
    id: 2,
    direction: 'end',
    date: 'Apr 2022 - Jan 2023',
    company: 'Launchy - Frontend Developer',
    desc: {
      eng: 'In My Role At Launchy, I Led A Team Dedicated To Creating Effective Web Pages Designed For Startups. Drawing On My Solid Grasp Of Front-End Technologies And User-Friendly Design Principles, I Played A Key Role In Turning Creative Ideas Into Visually Appealing And Functional Digital Space.',
      esp: 'jkj'
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
        <p className='md:text-center mt-5'>Como frontend developer he trabajado en variedad de proyectos que me permiten ofrecer servicios en sitios como </p> :
        <p className='md:text-center mt-5'>As a frontend developer I&apos;ve worked on a variety of projects that allow me to offer services on sites like </p>
      }
      
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {
          experience.map(item => <ExperienceCard 
            key={item.id} 
            direction={item.direction}
            company={item.company}
            desc={item.desc}
            date={item.date}
          />)
        }
      </ul>
      
    </div>
  )
}
