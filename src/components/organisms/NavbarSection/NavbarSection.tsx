import { TranslateBtn } from '@/components/atoms/TranslateBtn/TranslateBtn'
import React from 'react'

export const NavbarSection = () => {
  return (
    <div className='flex justify-between'>
      <img src="/assets/icons8-github.svg" alt="" />
      <TranslateBtn />
    </div>
  )
}
