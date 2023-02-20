import React from 'react'

const socialMedia = [
  {
    id: 1,
    src: '/assets/icons8-github.svg',
    link: 'https://github.com/Eliman-C5',
    name: 'Github'
  },
  {
    id: 2,
    src: '/assets/linkedin-sign.svg',
    link: 'https://www.linkedin.com/in/eli-castellano/',
    name: 'Linkedin'
  },
  {
    id: 3,
    src: '/assets/twitter-black-shape.svg',
    link: 'https://twitter.com/Eliman_dev',
    name: 'Twitter'
  },
  {
    id: 4,
    src: '/assets/icons8-instagram.svg',
    link: 'https://twitter.com/Eliman_dev',
    name: 'Instagram'
  },
]

export const FooterSection = () => {
  return (
    <div className='flex justify-between'>
      <p>@2023 eliman.dev</p>
      <div className='flex gap-4'>
        {
          socialMedia.map(item => 
            <a key={item.id} target='_blank' rel='noreferrer' href={item.link}>
              <img className='h-[30px] w-[30px]' src={item.src} alt={item.name} />
            </a>
          )
        }
      </div>
    </div>
  )
}
