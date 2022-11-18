import React from "react";
import { BsLinkedin,BsPinterest,BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noreferrer">
        <BsPinterest />
      </a>
    </div>
  );
};

export default HeaderSocials;
