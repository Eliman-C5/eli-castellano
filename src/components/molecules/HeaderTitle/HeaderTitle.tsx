import { Button } from '@/components/atoms/Button/Button'
import React, { useContext } from 'react'
import {Title} from '@/components/atoms/Title/Title'
import {charge, presentation} from '@/data/texts'
import { LanguageContext } from '@/context/LanguageProvider'

type HeaderTitle = {
  styles: string
}

export const HeaderTitle = ({ styles }: HeaderTitle) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div className={`${styles} flex flex-col items-center justify-center`}>
      <Title level='h1' title={isSpanishActive ? presentation.esp : presentation.eng} />
      <Title level='h1' title={isSpanishActive ? charge.esp : charge.eng } />
      <a href="#contact" className='animate-bounce bg-white rounded-full p-4 mt-8'>
        <img src="assets/XMLID_348_.svg" alt="" className='w-[20px] h-[20px]' />
      </a>
    </div>
  )
}