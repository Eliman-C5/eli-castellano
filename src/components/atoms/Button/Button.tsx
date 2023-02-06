import React from 'react'

interface ButtonProps {
  link: string,
  text: string
}

export const Button = ({link, text} : ButtonProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' >{text}</a>
  )
}
