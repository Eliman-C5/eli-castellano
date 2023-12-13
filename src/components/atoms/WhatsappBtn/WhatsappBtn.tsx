import React from 'react'

export const WhatsappBtn = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=4146216537&text=Hola,%20gracias%20por%20contactarte.%20Presiona%20el%20botón%20para%20chatear" 
      target="_blank" 
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  )
}
