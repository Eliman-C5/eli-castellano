import { LanguageContext } from '@/context/LanguageProvider'
import React, { useContext } from 'react'

interface TranslateProps {
  styles?: string
}

export const TranslateBtn = ({styles = ''}: TranslateProps) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext)
  
  return (
    <div className={`flex gap-4 ${styles} items-center`}>
      <span className='text-white'>ES</span>
        <label className="switch">
          <input type="checkbox" onClick={() => setIsSpanishActive(!isSpanishActive)} />
          <span className="slider round"></span>
        </label>
      <span className='text-white'>EN</span>
    </div>
  )
}
