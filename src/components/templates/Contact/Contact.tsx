import { ContactSection } from '@/components/organisms/ContactSection/ContactSection'
import React from 'react'
import { Section } from '../Wrapper/Section'

export const Contact = () => {
  return (
    <Section styles='mt-[40px] pb-[40px] md:mt-[80px] md:pb-[80px]'>
      <ContactSection />
    </Section>
  )
}
