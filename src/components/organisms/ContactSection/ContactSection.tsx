import React, { useContext } from 'react'
import {SectionTitle} from '@/components/molecules/SectionTitle/SectionTitle'
import {LanguageContext} from '@/context/LanguageProvider'
import { contactText, socialMedia } from '@/data/texts';
import { CopyToClipboard } from '@/components/atoms/CopyToClipboard/CopyToClipboard';
import { SocialLink } from '@/components/atoms/SocialLink/SocialLink';
import { Mockup } from '@/components/atoms/Mockup/Mockup';

export const ContactSection = () => {

  const {isSpanishActive, setIsSpanishActive} = useContext(LanguageContext);

  return (
  <div className='flex'>
    <div className='w-full lg:w-1/2'>
    
      <SectionTitle title={isSpanishActive ? 'Contacto' : 'Contact'} id='contact' />
      
      <div className="flex justify-center mt-4 mb-8 lg:hidden">
        <Mockup styles='max-h-[600px]' />
      </div>
    
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
    <div className="hidden lg:flex w-1/2 justify-center items-center">
      <Mockup styles='max-h-[600px]' />
    </div>
    
  </div>
    
  )
}
