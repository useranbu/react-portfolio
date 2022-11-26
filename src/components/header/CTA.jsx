import React from 'react'
import Resume from '../../assets/Anbarasan_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download="Anbarasan_Resume.pdf" className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA