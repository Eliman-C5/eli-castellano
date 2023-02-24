import React from 'react'
import FadeIn from './FadeIn'
import Wrapper from './Wrapper'
import { ContainerProp } from '@/interfaces/app_interfaces';

interface SectionProps extends ContainerProp {
  styles?: string
}

export const Section = ({children, styles = ''}: SectionProps) => {
  return (
    <Wrapper styles={styles}>
      <FadeIn className=''>{children}</FadeIn>
    </Wrapper>
  )
}
