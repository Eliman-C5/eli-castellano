import { TranslateBtn } from '@/components/atoms/TranslateBtn/TranslateBtn'
import React from 'react'

export const NavbarSection = () => {
  return (
    <div className='flex'>
      <img src="/assets/transparent.png" className='h-[57px] w-[54px] sm:h-auto sm:w-auto mt-4' alt="" />
      <TranslateBtn styles='ml-auto' />
    </div>
  )
}
