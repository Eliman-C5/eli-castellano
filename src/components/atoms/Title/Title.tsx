import React from 'react'

interface TitleProps {
  level: string,
  text: string,
  styles?: string,
  size?: string
}

export const Title = ({level, text, styles = 'text-center', size = '35'}: TitleProps): JSX.Element => {

  return (
    <>
      {level === 'h1' && <h1 className={`title-mobile md:text-[${size}px] ${styles}`}>{text}</h1>}
      {level === 'h2' && <h1 className={`title-mobile md:text-[${size}] ${styles}`}>{text}</h1>}
      {level === 'h3' && <h1 className={`title-mobile md:text-[${size}] ${styles}`}>{text}</h1>}
      {level === 'h4' && <h1 className={`title-mobile md:text-[${size}] ${styles}`}>{text}</h1>}
    </>
  )
  
}