import React from 'react'
import Wrapper from './Wrapper'
import { ContainerProp } from '@/interfaces/app_interfaces';

interface SectionProps extends ContainerProp {
  styles?: string
}

export const Section = ({children, styles}: SectionProps) => {
  return (
    <Wrapper styles={styles}>
      {children}
    </Wrapper>
  )
}
