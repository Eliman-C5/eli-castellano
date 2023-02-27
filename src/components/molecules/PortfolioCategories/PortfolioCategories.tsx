import { categories } from '@/data/texts'
import {LanguageContext} from '@/context/LanguageProvider'
import React, { useContext, useState } from 'react'
import { Projects } from '@/interfaces/app_interfaces'

type Props = {
  filterDispatch: React.Dispatch<any>
}

export const PortfolioCategories = ({filterDispatch}: Props) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);  
  const [isCategoryActive, setIsCategoryActive] = useState<string>('ALL')

  return (
    <div className='flex gap-4 justify-center mt-4'>
      {
        categories.map(category => (
          <span 
            className={`cursor-pointer ${category.type === isCategoryActive && 'gradient-text' } hover:gradient-text`} 
            key={category.id} 
            onClick={() => {
              setIsCategoryActive(category.type)
              filterDispatch({type: category.type})
            }}
          >
            {isSpanishActive ? category.name.esp : category.name.eng}
          </span>
        ))
      }
    </div>
  )
}
