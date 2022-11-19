import React from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillSignal,
  AiOutlineIdcard,
} from "react-icons/ai";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiance"
        onClick={() => setActiveNav("#experiance")}
        className={activeNav === "#experiance" ? "active" : ""}
      >
        <AiFillSignal />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <BsFillChatQuoteFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineIdcard />
      </a>
    </nav>
  );
};

export default Nav;
