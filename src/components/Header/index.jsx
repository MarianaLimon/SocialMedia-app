import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import AppImage from "../commons/AppImage";
import jwt_decode from "jwt-decode";
import { getUserById } from "../../services/users"
import Hamburger from "./MenuHamburger"
import { useHistory, useLocation } from "react-router";

import "./index.css";

export default function Header() {
  const [login, setLogin] = useState(false)
  const [menuAdmin, setMenuAdmin] = useState(false)
  const [urlHome, setUrlHome] = useState("/")

  const [avatar, setAvatar] = useState("")
  const history = useHistory();
  const location = useLocation();

  const routesAdmin = ["/homeadmin", "products", "product-detail"]
  const routesMedico = [""]
  const redirect = () => {
    if (location.pathname !== "/") {
      setUrlHome("/")
      history.push("/")
    }
  }

  const verifyExpirationToken = (decoded) => {
    const now = Date.now().valueOf() / 1000

    if ((typeof decoded.exp !== 'undefined' && decoded.exp < now)) {
      redirect()
    } else {
      return true
    }
  }


  useEffect(async () => {

    if (localStorage.getItem("token")) {
      const decoded = jwt_decode(localStorage.getItem("token"));
      const logged = await verifyExpirationToken(decoded)

      if (logged) {
        setLogin(true)
        decoded.role[0] === "medico" ? setUrlHome("/home") : setUrlHome("/homeadmin")
        decoded.role[0] === "admin" ? setMenuAdmin(true) : setMenuAdmin(false)

        const user = await getUserById(decoded.id)
        setAvatar(user.avatar_url)
      } else {
        redirect()
      }
    }

  }, [])

  return (
    <nav className="header d-flex justify-content-between align-items-center">
      <div className={`${menuAdmin ? "d-block" : "d-none"}`}>
        <Hamburger />
      </div>
      <div className="logo-search d-flex justify-content-center align-items-center">
        <Logo url={urlHome} />
      </div>
      <div className="auth d-flex justify-content-center align-items-center">
        <AppImage
          pathImage={avatar}
          classImage={`avatar ${login ? "d-block" : "d-none"}`}
          altImage="User Name"
        />
      </div>
    </nav>
  )
}
