import React from 'react'
import {Title} from '@/components/atoms/Title/Title'
import {TitleProps} from '@/interfaces/app_interfaces'

interface SectionTitleProps extends TitleProps {
  text?: string
}

/////Comenzar a usar bien las interfaces (Ver proyecto de curso de YT, repo de Midu y documentacion). 
//Usar interfaces dentro de interfaces ya que algunas props se repiten

export const SectionTitle = ({ styles, title, text }: SectionTitleProps) => {
  return (
    <div className={`${styles} flex flex-col items-center pt-[15%]`}>
      <Title level='h2' title={title} styles='text-center mb-4' />
      {
        text && <p className='my-4' >{text}</p>
      }
    </div>
  )
}
