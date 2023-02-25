import {ReactNode} from 'react';

export interface TitleProps {
  styles?: string,
  title: string,
}

export interface TranslateMode { 
  isSpanishActive: boolean; 
  setIsSpanishActive: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ContainerProp {
  children: ReactNode
}

export type Categories = {
  id: number,
  name: {
    eng: string,
    esp: string
  },
  type: 'ALL' | 'WORK' | 'CHALLENGES' | 'PERSONAL'
} 

export type Projects = {
  id: number,
  name: string,
  link: string,
  repository: string,
  img: string,
  category: 'ALL' | 'WORK' | 'CHALLENGES' | 'PERSONAL',
  active: boolean
}