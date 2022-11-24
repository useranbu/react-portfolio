import React from 'react'
import './Contact.css'

const Contact = ({ details }) => {
  return (
    <section ref={details.navRef} id={details.navID}>Contact</section>
  )
}

export default Contact
