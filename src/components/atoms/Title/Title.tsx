import React from 'react'
import {TitleProps} from '@/interfaces/app_interfaces'

interface TitleAtom extends TitleProps {
  level: string,
}

export const Title = ({level, title, styles = 'text-center'}: TitleAtom): JSX.Element => {

  return (
    <>
      {level === 'h1' && <h1 className={`title ${styles}`}>{title}</h1>}
      {level === 'h2' && <h2 className={`title  ${styles}`}>{title}</h2>}
      {level === 'h3' && <h3 className={`title ${styles}`}>{title}</h3>}
      {level === 'h4' && <h4 className={`title ${styles}`}>{title}</h4>}
    </>
  )
  
}