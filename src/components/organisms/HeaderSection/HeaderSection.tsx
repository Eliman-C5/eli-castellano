import { ImageOfMe } from '@/components/atoms/ImageOfMe/ImageOfMe'
import { HeaderTitle } from '@/components/molecules/HeaderTitle/HeaderTitle'
import React from 'react'

export const HeaderSection = () => {
  return (
    <div className='flex md:px-10 flex-col md:flex-row lg:h-[80vh] md:h-auto justify-center'>
      <HeaderTitle styles='w-full md:w-1/2'/>
      <ImageOfMe styles='hidden md:flex justify-center w-1/2' />
    </div>
  )
}
