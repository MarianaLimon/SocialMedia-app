import React, { useState } from "react";
import banner from "../../../img/home-banner.png"
import Icons from "../../../components/commons/icons";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import "./index.css"

export default function HomeAdmin() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <img src={banner} alt="" className="w-100 }" />
            <p className="text-center my-4"><b>Bienvenido Administrador</b></p>
          </div>
        </div>
        <div className="row icons-home mt-4">
          <div className="col-6 col-lg-3">
            <button class="btn-menu">
              <Icons value={'doctor'}/>
              <p className="icon-label pb-lg-0">Usuarios</p>
            </button>
          </div>
          <div className="col-6 col-lg-3">
            <button class="btn-menu">
              <Icons value={'products'}/>
              <p className="icon-label pb-lg-0">Productos</p>
            </button>
          </div>
          <div className="col-6 col-lg-3">
            <button class="btn-menu">
              <Icons value={'articles'}/>
              <p className="icon-label">Artículos</p>
            </button>
          </div>
          <div className="col-6 col-lg-3">
            <button class="btn-menu">
              <Icons value={'webinars'}/>
              <p className="icon-label">Webinars</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}