import { categories } from '@/data/texts'
import {LanguageContext} from '@/context/LanguageProvider'
import React, { useContext } from 'react'

type Props = {
  filterDispatch: React.Dispatch<any>
}

export const PortfolioCategories = ({filterDispatch}: Props) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);  

  return (
    <div className='flex gap-4 justify-center mt-4'>
      {
        categories.map(category => (
          <span className="" key={category.id} onClick={() => filterDispatch({type: category.type})}>
            {isSpanishActive ? category.name.esp : category.name.eng}
          </span>
        ))
      }
    </div>
  )
}
