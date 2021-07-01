import React from "react";
import imgLogo from "../../img/logo.png";

const Logo = ({ url, props }) => {
  return (
    <a href={url ? url : "/"}>
      <img src={imgLogo} className="logo" alt="SocialMedic" />
    </a>
  );
};

export default Logo;
