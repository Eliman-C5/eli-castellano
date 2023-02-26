import { BtnLink } from '@/components/atoms/BtnLink/BtnLink'
import { LanguageContext } from '@/context/LanguageProvider'
import { Projects } from '@/interfaces/app_interfaces'
import React, { useContext, useState } from 'react'

type Props = {
  item: Projects
}

export const PortfolioCard = ({item}: Props) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);
  const [cardInfo, setCardInfo] = useState<boolean>(false);

  return (
      <div 
        className={`max-w-[360px] w-full h-[250px] relative shadow-xl shadow-[#44404061]`} 
        onMouseOver={() => setCardInfo(true)}
        onMouseLeave={() => setCardInfo(false)}
      >
                            
        <img src={item.img} alt={item.name} className='absolute top-0 right-0 left-0 bottom-0 h-full bg-cover' />
              
        <div 
          className={`${cardInfo ? 'flex' : 'hidden'} flex-col justify-center items-center bg-[#44404061] gap-4 
          absolute top-0 right-0 left-0 bottom-0 z-10`}
        >
                          
            <BtnLink link={item.link} text={isSpanishActive ? 'Sitio web' : 'Website'} />
            
            <BtnLink link={item.repository} text={isSpanishActive ? 'Repositorio' : 'Repository'} />
        
        </div>
              
      </div>
  )
}
