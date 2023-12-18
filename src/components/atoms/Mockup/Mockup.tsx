import React from 'react'

type MockupProps= {
  styles?: string,
}

export const Mockup = ({styles}: MockupProps) => {
  return (
      <div className={`mockup-phone border-primary ${styles}`}>
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>
  )
}
