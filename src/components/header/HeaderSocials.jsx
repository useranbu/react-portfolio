import React from "react";
import { BsLinkedin,BsPinterest,BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/anbarasan-ganeshkumar/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/useranbu" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://in.pinterest.com/AnbarasanGaneshkumar/" target="_blank" rel="noreferrer">
        <BsPinterest />
      </a>
    </div>
  );
};

export default HeaderSocials;
