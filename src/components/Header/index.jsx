import React from "react";

import Logo from "./Logo";
import AppImage from "../commons/AppImage";

import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="header d-flex justify-content-between align-items-center">
        <div className="logo-search d-flex justify-content-center align-items-center">
          <Logo url="/" />
        </div>
        <div className="auth d-flex justify-content-center align-items-center">
          <AppImage
            pathImage="https://image.shutterstock.com/image-vector/vector-medical-doctor-icon-uniform-600w-1329028268.jpg"
            classImage="avatar"
            altImage="User Name"
          />
        </div>
      </nav>
    );
  }
}

export default Header;
