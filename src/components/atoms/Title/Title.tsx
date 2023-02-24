import React from 'react'
import {TitleProps} from '@/interfaces/app_interfaces'
import { AnimatedWord } from '../AnimatedWord/AnimatedWord'

interface TitleAtom extends TitleProps {
  level: string,
}

export const Title = ({level, title, styles = 'text-center'}: TitleAtom): JSX.Element => {

  return (
    <>
      {level === 'h1' && 
        <AnimatedWord text={title} className={`title ${styles} gap-[1px]`} />
      }
      {level === 'h2' && <h2 className={`title-h2  ${styles}`}>{title}</h2>}
      {level === 'h3' && <h3 className={`title-h3 ${styles}`}>{title}</h3>}
      {level === 'h4' && <h4 className={`title-h4 ${styles}`}>{title}</h4>}
    </>
  )
  
}