import React from 'react'
import {TitleProps} from '@/interfaces/app_interfaces'

interface TitleAtom extends TitleProps {
  level: string,
  id?: string
}

export const Title = ({level, title, id, styles = 'text-center'}: TitleAtom): JSX.Element => {

  return (
    <>
      {level === 'h1' && <h1 className={`title ${styles}`} id={id}>{title}</h1>}
      {level === 'h2' && <h2 className={`title-h2  ${styles}`} id={id}>{title}</h2>}
      {level === 'h3' && <h3 className={`title-h3 ${styles}`} id={id}>{title}</h3>}
      {level === 'h4' && <h4 className={`title-h4 ${styles}`} id={id}>{title}</h4>}
    </>
  )
  
}