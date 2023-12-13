import React from 'react'
import { HeaderSection } from '@/components/organisms/HeaderSection/HeaderSection'
import { Section } from '../Wrapper/Section'

export const Header = () => {
  return (
    <Section styles='mt-[250px] mb-[150px] md:my-[80px]'>
      <HeaderSection />
    </Section>
  )
}
