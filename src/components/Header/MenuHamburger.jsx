import React, { useState } from "react";

import ListMenu from "./ListMenu";
import Styles from "./menuHamburger.module.css";
import Icons from "../commons/icons";

export default function MenuHamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${Styles.navbarToggler} d-block d-lg-none`}
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <Icons value="menu" />
      </button>
      <ListMenu open={open} />
    </>
  );
}
