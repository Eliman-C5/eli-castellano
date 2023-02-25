import React from 'react'
import { HeaderSection } from '@/components/organisms/HeaderSection/HeaderSection'
import { Section } from '../Wrapper/Section'

export const Header = () => {
  return (
    <Section styles='mt-[40px] mb-[40px] md:mb-[80px]'>
      <HeaderSection />
    </Section>
  )
}
