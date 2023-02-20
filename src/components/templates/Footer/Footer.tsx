import { FooterSection } from '@/components/organisms/FooterSection/FooterSection'
import React from 'react'
import Wrapper from '../Wrapper/Wrapper'

export const Footer = () => {
  return (
    <Wrapper styles='mt-[80px] md:mt-[120px] mb-[20px]'>
      <FooterSection />
    </Wrapper>
  )
}
