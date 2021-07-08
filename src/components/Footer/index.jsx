import React, { useEffect, useState } from "react";
import Icons from "../commons/icons";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router";
import "./index.css"

export default function Footer() {
  const [menuDoctor, setMenuDoctor] = useState(false)
  const [url, setUrl] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decoded = jwt_decode(localStorage.getItem("token"));
      decoded.role[0] === "medico" ? setMenuDoctor(true) : setMenuDoctor(false)
      location.pathname === "/home" ? setUrl(true) : setUrl(false)
    }
  })

  return (
    <footer>
      <div className={`footer-menu d-md-none d-flex mx-3 ${menuDoctor ? "d-block" : "d-none"}  ${url ? "d-none" : "d-block"}`}>
        <Icons value={'home'} className="esto" />
        <Icons value={'webinars'} />
        <Icons value={'articles'} />
        <Icons value={'products'} />
      </div>
    </footer >
  );
}