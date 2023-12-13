import { LanguageContext } from '@/context/LanguageProvider'
import React, { useContext } from 'react'

type experience = {
  direction: string,
  date: string,
  company: string,
  desc: {
    eng: string,
    esp: string
  }
}

export const ExperienceCard = ({direction, date, company, desc}: experience) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <li>
      <div className="timeline-middle">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          className="h-5 w-5"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
      <div className={`timeline-${direction} md:text-end mb-10`}>
        <time className="font-mono italic">{date}</time>
        <div className="text-lg font-black">
          {company}
        </div>
        {isSpanishActive ? desc.esp : desc.eng}
      </div>
      <hr/>
    </li>
  )
}
