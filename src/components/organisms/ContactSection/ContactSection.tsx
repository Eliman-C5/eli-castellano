import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { AnimatedWord } from '@/components/atoms/AnimatedWord/AnimatedWord';
import { contactText, socialMedia } from '@/data/texts';
import { CopyToClipboard } from '@/components/atoms/CopyToClipboard/CopyToClipboard';
import { SocialLink } from '@/components/atoms/SocialLink/SocialLink';

export const ContactSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div id='contact'>
    
      <SectionTitle title={isSpanishActive ? 'Contacto' : 'Contact'} />
      
      {
        isSpanishActive ?
          contactText.esp.map(item => <AnimatedWord key={item.id} text={item.text} className='mt-5' />) :
          contactText.eng.map(item => <AnimatedWord key={item.id} text={item.text} className='mt-5' />)
      }
      
      <CopyToClipboard text='eliman1926@gmail.com'buttonText='eliman1926@gmail.com' styles='mt-5' />
      
      {
        socialMedia.map(item => 
          <SocialLink key={item.id} item={item} />
        )
      }
      
    </div>
  )
}
