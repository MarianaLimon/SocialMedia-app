import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Styles from "./avatarListMenu.module.css";

export default function AvatarListMenu({ open }) {
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

  const history = useHistory()
  const logout = () => {
    localStorage.removeItem("token");
    history.push('/');
  }

  const profile = () => history.push('/profile');

  return (
    <div className={`${openMenu} ${Styles.MenuMobile}`}>
      <div className={`${Styles.MenuWrapper}`}>
        <div className={`${Styles.MenuTitle}`}>
          <button type="button" className={`${Styles.MenuBtn} mx-1`} onClick={profile} >
            Ver Perfil
          </button>
          <button className={`${Styles.MenuCloseBtn}`} type="button">
            <span onClick={close}>x</span>
          </button>
        </div>
      <button type="button" className={`${Styles.MenuBtn}`} onClick={logout} >
        Cerar Sesión
      </button>
        
      </div>
    </div>
  );
}
