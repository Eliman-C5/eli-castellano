import React, { useContext } from 'react'
import {Title} from '@/components/atoms/Title/Title'
import {presentation, subTitle} from '@/data/texts'
import { LanguageContext } from '@/context/LanguageProvider'

type HeaderTitle = {
  styles: string
}

export const HeaderTitle = ({ styles }: HeaderTitle) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div className={`${styles} flex flex-col items-center lg:pt-[5rem]`}>
      <Title level='h1' title={isSpanishActive ? presentation.esp : presentation.eng} styles='text-center md:text-left' />
      <Title level='h4' title={isSpanishActive ? subTitle.esp : subTitle.eng} styles='text-center mt-8 md:text-left' />
    </div>
  )
}