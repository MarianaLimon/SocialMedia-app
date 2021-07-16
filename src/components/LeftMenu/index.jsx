import React from "react";

import Icons from "../commons/icons";

import "./index.css"

export default function LeftMenu() {

  return (
    <nav className="left-menu-item pt-md-4 d-none d-lg-block">
      <li>
        <a href="/homeadmin">
          <Icons value={'home'} /> &nbsp;<span>Home</span>
        </a>
      </li>
      <li>
        <a href="/webinars-admin">
          <Icons value={'webinars'} /> &nbsp;<span>Webinars</span>
        </a>
      </li>
      <li>
        <a href="/articles-admin">
          <Icons value={'articles'} /> &nbsp;<span>Artículos</span>
        </a>
      </li>
      <li>
        <a href="/products-admin">
          <Icons value={'products'} /> &nbsp;<span>Productos</span>
        </a>
      </li>
      <li>
        <a href="/users">
          <Icons value={'doctor'} /> &nbsp;<span>Usuarios</span>
        </a>
      </li>
    </nav>
  );
}