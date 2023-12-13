import React, { createContext, useState } from "react";
import {ContainerProp, TranslateMode} from '@/interfaces/app_interfaces'

export const LanguageContext = createContext<TranslateMode>({} as TranslateMode);

export const LanguageProvider = ({ children }: ContainerProp) => {

  const [isSpanishActive, setIsSpanishActive] = useState<boolean>(true)

  return (
    <LanguageContext.Provider value={{
      isSpanishActive,
      setIsSpanishActive,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
