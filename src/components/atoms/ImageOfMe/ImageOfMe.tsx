import React from 'react'

type Props = {
  styles: string
}

export const ImageOfMe = ({styles}: Props) => {
  return (
    <div className={`${styles}`}>
        <img className='' src="assets/my-picture-removebg-preview.png" alt="assets/my-picture-removebg-preview.png" />
    </div>
  )
}
