import React from 'react'

interface ButtonProps {
  link: string,
  text: string,
  styles?: string
}

export const Button = ({link, text, styles} : ButtonProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className={`${styles} btn`} >{text}</a>
  )
}
