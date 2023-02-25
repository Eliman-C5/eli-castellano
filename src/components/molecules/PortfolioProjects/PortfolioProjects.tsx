import React, { useContext } from 'react'
import {LanguageContext} from '@/context/LanguageProvider'
import { Title } from '@/components/atoms/Title/Title';
import { Projects } from '@/interfaces/app_interfaces';

type Props = {
  filter: Projects[]
}

export const PortfolioProjects = ({filter}: Props) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div className="flex flex-wrap gap-4">
        {
          filter.map(item => (item.active &&
            (<div className="bg-white w-[200px] h-[200px] flex flex-col gap-4 justify-center items-center" key={item.id}>
              
              <Title level='h4' title={item.name} styles='text-center text-black' />
              
              <div className="">
                <a 
                  href={item.link} 
                  target='_blank' 
                  rel='noreferrer' 
                  className='text-black'
                >
                  {isSpanishActive ? 'Sitio web' : 'Website'}
                </a>
                <a 
                  href={item.link} 
                  target='_blank' 
                  rel='noreferrer' 
                  className='text-black'
                >
                  {isSpanishActive ? 'repositorio' : 'Repository'}
                </a>
              </div>
              
            </div>)
          ))
        }
      </div>
  )
}
