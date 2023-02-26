import React from 'react'

type Props = {
  styles: string
}

export const ImageOfMe = ({styles}: Props) => {
  return (
    <div className={`${styles} image-container`}>
        <img className='me' src="assets/my-picture-removebg-preview.png" alt="assets/my-picture-removebg-preview.png" />
    </div>
  )
}
