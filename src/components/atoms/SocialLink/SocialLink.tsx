import React from 'react'

type Props = {
  item: {
    link: string,
    name: string
  }
}

export const SocialLink = ({item}: Props) => {

  const {link, name} = item;

  return (
    <div className='flex items-center gap-4 mt-3' >
        <a 
          href={link} 
          className='text-blue-500 font-medium hover:text-[1.2rem]'
          target="_blank" 
          rel="noopener noreferrer"
        > 
          {name}
        </a>
    </div>
  )
}
