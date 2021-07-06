import React from "react";
import Icons from "../commons/icons";
import "./index.css"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-menu d-md-none d-flex mx-3">
          <Icons value={'home'}/>
          <Icons value={'webinars'}/>
          <Icons value={'articles'}/>
          <Icons value={'products'}/>
        </div>
      </footer>
    );
  }
}

export default Footer;
