import React from 'react'
import './About.css'

const About = ({details}) => {
  return (
    <section ref={details.navRef} id={details.navID}>About</section> // id='about'
  )
}

export default About
