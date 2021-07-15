import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Styles from "./listMenu.module.css";

export default function ListMenu({ open }) {
  const [openMenu, setOpenMenu] = useState("d-none");
  const history = useHistory()

  useEffect(() => {
    if (open) {
      setOpenMenu("");
    }
  }, [open]);
  const close = () => {
    setOpenMenu("d-none");
    open = !open;
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push('/');
  }

  return (
    <div className={`${openMenu} ${Styles.MenuMobile}  d-block d-lg-none`}>
      <div className={`${Styles.MenuWrapper}`}>
        <div className={`${Styles.MenuTitle}`}>
          <h2>Menu</h2>

          <button className={`${Styles.MenuCloseBtn}`} type="button">
            <span onClick={close}>x</span>
          </button>
        </div>

        <ul>
          <li className="nav-item active">
            <a href="/homeadmin">Home</a>
          </li>
          <li className="nav-item active">
            <a href="/webinars-admin">Webinars</a>
          </li>
          <li className="nav-item active">
            <a href="/articles-admin">Artículos</a>
          </li>
          <li className="nav-item active">
            <a href="/products-admin">Productos</a>
          </li>
          <li className="nav-item active">
            <a href="/users">Usuarios</a>
          </li>

          <li className="nav-item active">
            <a href="#" onClick={logout}>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
