import React from "react";
import "./Header.css";
import CTA from "./CTA.jsx";
import pic from "../../assets/cartoon.png";
import Socials from "./HeaderSocials";

const Header = ({ details }) => {
  return (
    <header ref={details.navRef} id={details.navID}>
      <h3 className="alert">INFO: This site is still being built</h3>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Anbarasan Ganeshkumar</h1>
        <h5 className="text-light">A Passionate Fullstack Developer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={pic} alt="man pic"></img>
        </div>

        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
