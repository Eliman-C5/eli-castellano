import { HeaderTitle } from '@/components/molecules/HeaderTitle/HeaderTitle'
import React from 'react'

export const HeaderSection = () => {
  return (
    <div className='flex px-10 flex-col md:flex-row h-[80vh] md:h-auto justify-center'>
      <HeaderTitle styles='w-full md:w-1/2'/>
      <div className="hidden md:inline-block w-1/2 image-container">
        <img className='me' src="assets/my-picture-removebg-preview.png" alt="assets/my-picture-removebg-preview.png" />
      </div>
    </div>
  )
}
