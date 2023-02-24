import { HeaderTitle } from '@/components/molecules/HeaderTitle/HeaderTitle'
import React from 'react'

export const HeaderSection = () => {
  return (
    <div className='flex px-10'>
      <HeaderTitle styles='w-1/2'/>
      <div className="w-1/2">
        <img className='' src="assets/my-picture-removebg-preview.png" alt="assets/my-picture-removebg-preview.png" />
      </div>
    </div>
  )
}
