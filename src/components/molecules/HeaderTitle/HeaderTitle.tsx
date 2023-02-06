import { Button } from '@/components/atoms/Button/Button'
import React from 'react'
import {Title} from '@/components/atoms/Title/Title'

interface HeaderTitleProps {
  styles: string
}

export const HeaderTitle = ({ styles }: HeaderTitleProps) => {
  return (
    <div className={`${styles} flex flex-col items-center pt-[15%]`}>
      <Title level='h1' text={`I'm Eli Castellano`} styles='text-left' />
      <Title level='h1' text='Frontend Developer' styles='text-left' />
      <Button link='https://www.linkedin.com/in/eli-castellano/' text='Contact' />
    </div>
  )
}