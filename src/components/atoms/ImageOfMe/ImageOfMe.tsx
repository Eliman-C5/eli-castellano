import React from 'react'

type Props = {
  styles: string
}

export const ImageOfMe = ({styles}: Props) => {
  return (
    <div className={`${styles}`} style={{zIndex: '1'}}>
        <img className='rounded-[50%] bg-[#2f2c2c36]' src="assets/my-picture-removebg-preview.png" alt="assets/my-picture-removebg-preview.png" />
    </div>
  )
}
