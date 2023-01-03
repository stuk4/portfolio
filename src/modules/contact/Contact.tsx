import React from 'react'
import { TitleSection } from '../common/components/TitleSection';

export const Contact = () => {
  return (
    <section id='contact' >
         <TitleSection title='Contactame' />
        <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a href="mailto:didier.bpp@gmail.com" className='button' rel="noopener noreferrer" target="_blank">Contacto</a>
    </section>
  )
}
