import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { contactText, socialMedia } from '@/data/texts';
import { CopyToClipboard } from '@/components/atoms/CopyToClipboard/CopyToClipboard';
import { SocialLink } from '@/components/atoms/SocialLink/SocialLink';

export const ContactSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
    <div>
    
      <SectionTitle title={isSpanishActive ? 'Contacto' : 'Contact'} id='contact' />
      
      {
        isSpanishActive ?
          contactText.esp.map(item => <p key={item.id} className='mt-5'>{item.text}</p>) :
          contactText.eng.map(item => <p key={item.id} className='mt-5'>{item.text}</p>)
      }
      
      <CopyToClipboard text='eliman1926@gmail.com'buttonText='eliman1926@gmail.com' styles='mt-8' />
      
      {
        socialMedia.map(item => 
          <SocialLink key={item.id} item={item} />
        )
      }
      
    </div>
  )
}
