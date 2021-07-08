import React, { useEffect, useState } from "react";
import Icons from "../commons/icons";
import jwt_decode from "jwt-decode";
import "./index.css"

export default function Footer() {
  const [menuDoctor, setMenuDoctor] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decoded = jwt_decode(localStorage.getItem("token"));
      decoded.role[0] === "medico" ? setMenuDoctor(true) : setMenuDoctor(false)
    }
  })

  return (
    <footer>
      <div className={`footer-menu d-md-none d-flex mx-3 ${menuDoctor ? "d-block" : "d-none"}`}>
        <Icons value={'home'} className="esto" />
        <Icons value={'webinars'} />
        <Icons value={'articles'} />
        <Icons value={'products'} />
      </div>
    </footer >
  );
}