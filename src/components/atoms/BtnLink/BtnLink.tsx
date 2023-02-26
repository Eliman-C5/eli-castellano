import React from 'react'

type Props = {
  link: string,
  text: string
}

export const BtnLink = ({link, text}: Props) => {
  return (
    <a 
      href={link} 
      target='_blank' 
      rel='noreferrer' 
      className='text-white text-center block h-fit px-4 py-2 w-[145px] rounded-3xl bg-gradient-to-r from-[#007CF0] to-[#00DFD8] hover:opacity-90'
    >
      {text}
    </a>
  )
}
