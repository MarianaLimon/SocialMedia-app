import React from "react";

import Logo from "./Logo";

//import "./index.css";

class Header extends React.Component {
  render() {
    return (
      /*<nav clasName={Styles.Header}>*/
      <nav className="header d-flex justify-content-between align-items-center">
        <div className="logo-search d-flex justify-content-center align-items-center">
          <Logo url="#" />
        </div>
        <div className="auth d-flex justify-content-center align-items-center"></div>
      </nav>
    );
  }
}

export default Header;
