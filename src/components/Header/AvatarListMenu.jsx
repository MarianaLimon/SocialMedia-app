import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Icons from "../commons/icons";

import Styles from "./avatarListMenu.module.css";

export default function AvatarListMenu({ open, isDoctor }) {
  const [openMenu, setOpenMenu] = useState("d-none");
  const [doctor, setDoctor] = useState(false);

  useEffect(() => {
    if (isDoctor) {
      setDoctor(true);
    }
  }, [isDoctor]);

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
          <button type="button" className={`${Styles.MenuBtn} mx-1 pt-2 ${doctor ? "d-block" : "d-none"}`} onClick={profile} >
          <Icons value={'doctor'} className={`${Styles.LeftMenuIcon}`} /> Ver Perfil
          </button>
          <button className={`${Styles.MenuCloseBtn}`} type="button">
            <span onClick={close}>x</span>
          </button>
        </div>
      <button type="button" className={`${Styles.MenuBtn}`} onClick={logout} >
        <Icons value={'exit'} className={`${Styles.LeftMenuIconExit}`} />Cerrar Sesión
      </button>
        
      </div>
    </div>
  );
}
