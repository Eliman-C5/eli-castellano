import React from 'react'

interface ButtonProps {
  link: string,
  text: string,
  styles?: string
}

export const Button = ({link, text, styles} : ButtonProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className={`${styles} font-medium delay-100 duration-300 ease-in-out`} >{text}</a>
  )
}
