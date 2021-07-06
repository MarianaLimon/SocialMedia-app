import React, { useState } from "react";

import Icons from "../commons/icons";

import "./index.css"

export default function LeftMenu() {
  
  return (
    <nav className="left-menu-item pt-md-4 d-none d-lg-block">
      <li>
        <a href="">
          <Icons value={'home'}/> &nbsp;<span>Home</span>
        </a>
      </li>
      <li>
        <a href="">
          <Icons value={'webinars'}/> &nbsp;<span>Webinars</span>
        </a>
      </li>
      <li>
        <a href="">
          <Icons value={'articles'}/> &nbsp;<span>Artículos</span>
        </a>
      </li>
      <li>
        <a href="">
          <Icons value={'products'}/> &nbsp;<span>Productos</span>
        </a>
      </li>
      <li>
        <a href="" className="active" active>
          <Icons value={'doctor'}/> &nbsp;<span>Usuarios</span>
        </a>
      </li>
    </nav>
  );
}