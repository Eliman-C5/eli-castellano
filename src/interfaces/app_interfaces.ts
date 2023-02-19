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