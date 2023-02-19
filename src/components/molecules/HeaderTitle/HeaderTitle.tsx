import { Button } from '@/components/atoms/Button/Button'
import React, { useContext } from 'react'
import {Title} from '@/components/atoms/Title/Title'
import {presentation} from '@/data/texts'
import { LanguageContext } from '@/context/LanguageProvider'

type HeaderTitle = {
  styles: string
}

export const HeaderTitle = ({ styles }: HeaderTitle) => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div className={`${styles} flex flex-col items-center pt-[15%]`}>
      <Title level='h1' title={isSpanishActive ? presentation.esp : presentation.eng} styles='text-left' />
      {/* Crear un renderizado condicional para que cuando el texto sea en ingles muestre un tag p 
      con un efecto de color*/}
      {
        isSpanishActive ?
        <h1 className='title text-left'> Desarrollador <span>Frontend</span> </h1> :
        <h1 className='title text-left'> <span>Frontend</span> Developer </h1>
      }
      <Button link='https://www.linkedin.com/in/eli-castellano/' text='Contact' />
    </div>
  )
}