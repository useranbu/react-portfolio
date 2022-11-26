import React, { useRef } from 'react'
import './App.css'

import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillSignal,
  AiOutlineIdcard,
} from "react-icons/ai";
import { BsFillChatQuoteFill } from "react-icons/bs";

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  const userRef = useRef();
  const homeRef = useRef();
  const experienceRef = useRef();
  const testimonalsRef = useRef();
  const contactRef = useRef();

  const navItems = [
    {
      navIcon: AiOutlineHome,
      navRef: homeRef,
      navID: "home"
    },
    {
      navIcon: AiOutlineUser,
      navRef: userRef,
      navID: "about"
    },
    {
      navIcon: AiFillSignal,
      navRef: experienceRef,
      navID: "experience"
    },
    {
      navIcon: BsFillChatQuoteFill,
      navRef: testimonalsRef,
      navID: "testimonials"
    },
    {
      navIcon: AiOutlineIdcard,
      navRef: contactRef,
      navID: "contact"
    }
  ];

  return (
    <>
      <Header details={navItems[0]} />
      <Nav navItems={navItems} />
      <About details={navItems[1]} />
      <Experience details={navItems[2]} />
      <Testimonials details={navItems[3]} />
      <Contact details={navItems[4]} />
      <Footer />
    </>
  )
}

export default App
