import React from "react";
import Icons from "../commons/icons";

import "./index.css"

export default function LeftMenuDoctor() {
  return (
    <nav className="left-menu-item pt-md-4 d-none d-md-block">
      <li>
        <a href="/home">
          <Icons value={'home'} /> &nbsp;<span>Home</span>
        </a>
      </li>
      <li>
        <a href="/webinars">
          <Icons value={'webinars'} /> &nbsp;<span>Webinars</span>
        </a>
      </li>
      <li>
        <a href="/articles">
          <Icons value={'articles'} /> &nbsp;<span>Artículos</span>
        </a>
      </li>
      <li>
        <a href="/products">
          <Icons value={'products'} /> &nbsp;<span>Productos</span>
        </a>
      </li>
      <li>
        <a href="/profile">
          <Icons value={'doctor'} /> &nbsp;<span>Perfil</span>
        </a>
      </li>
    </nav>
  );
}