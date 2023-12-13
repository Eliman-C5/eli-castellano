import { BtnLink } from '@/components/atoms/BtnLink/BtnLink'
import { LanguageContext } from '@/context/LanguageProvider'
import { Projects } from '@/interfaces/app_interfaces'
import React, { useContext, useState } from 'react'

type Props = {
  item: Projects
}

export const PortfolioCard = ({item}: Props) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className='h-[188px]'>
          <img src={item.img} alt={item.name} className='h-full' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{isSpanishActive ? item.info.esp : item.info.eng}</p>
          <div className="card-actions justify-end">
            <a 
              className="btn btn-primary" 
              href={item.link} 
              target="_blank"
              rel='noreferrer'
            >
              {isSpanishActive ? 'Ver sitio web' : 'Visit Website'}
            </a>
          </div>
        </div>
      </div>
  )
}
