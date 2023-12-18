import React from 'react'

type MockupProps= {
  styles?: string,
}

export const Mockup = ({styles}: MockupProps) => {
  return (
      <div className={`mockup-phone border-primary ${styles}`}>
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <video width={320} loop controls>
              <source src="https://res.cloudinary.com/datsipxkz/video/upload/v1702916344/slghjqkoqor76i1eaj5t.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
  )
}
