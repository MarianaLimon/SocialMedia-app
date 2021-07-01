import React, { useEffect, useState } from "react";

import Styles from "./listMenu.module.css";

export default function ListMenu({ open }) {
  const [openMenu, setOpenMenu] = useState("d-none");

  useEffect(() => {
    if (open) {
      setOpenMenu("");
    }
  }, [open]);
  const close = () => {
    setOpenMenu("d-none");
    open = !open;
  };

  return (
    <div className={`${openMenu} ${Styles.MenuMobile}  d-block d-md-none`}>
      <div className={`${Styles.MenuWrapper}`}>
        <div className={`${Styles.MenuTitle}`}>
          <h2>Menu</h2>

          <button className={`${Styles.MenuCloseBtn}`} type="button">
            <span onClick={close}>x</span>
          </button>
        </div>

        <ul>
          <li className="nav-item active">
            <a href="/">Inicio</a>
          </li>
          <li className="nav-item active">
            <a href="/">Usuarios</a>
          </li>
          <li className="nav-item active">
            <a href="/">Productos</a>
          </li>
          <li className="nav-item active">
            <a href="/">Articulos</a>
          </li>
          <li className="nav-item active">
            <a href="/">Webinars</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
