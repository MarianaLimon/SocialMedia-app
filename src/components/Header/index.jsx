import React from "react";

import Logo from "./Logo";

import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="header d-flex justify-content-between align-items-center">
        <div className="logo-search d-flex justify-content-center align-items-center">
          <Logo url="/" />
        </div>
        <div className="auth d-flex justify-content-center align-items-center">
          <img
            src="https://image.shutterstock.com/image-vector/vector-medical-doctor-icon-uniform-600w-1329028268.jpg"
            alt="avatar"
            className="tempAvatar"
          />
        </div>
      </nav>
    );
  }
}

export default Header;
