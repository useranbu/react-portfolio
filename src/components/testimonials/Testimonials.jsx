import React from 'react'
import './Testimonials.css'

const Testimonials = ({ details }) => {
  return (
    <section ref={details.navRef} id={details.navID}>Testimonials</section>
  )
}

export default Testimonials
