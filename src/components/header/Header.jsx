import React from "react";
import "./Header.css";
import CTA from "./CTA.jsx";
import pic from "../../assets/manpic.jpg";
import Socials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Anbarasan</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <Socials />
        
        <div className="me">
          <img src={pic} alt="man pic"></img>
        </div>
        
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
