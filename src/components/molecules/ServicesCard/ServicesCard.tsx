import { AnimatedWord } from '@/components/atoms/AnimatedWord/AnimatedWord'
import { Title } from '@/components/atoms/Title/Title'
import React from 'react'

type ServicesCard = {
  title: string,
  src: string,
  text: string
}

export const ServicesCard = ({title, src, text}: ServicesCard) => {

  return (
    <div className='bg-white px-6 py-10 flex flex-col mx-auto gap-4 w-full '>
      <img src={src} alt={title} className='h-[40px] w-[40px] mx-auto' />
      <Title level='h4' title={title} styles='text-center text-black' />
      <AnimatedWord text={text} className='text-black text-center' />
    </div>
  )
}
