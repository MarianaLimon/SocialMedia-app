import React, { useState } from "react";
import banner from "../../../img/home-banner.png"
import Icons from "../../../components/commons/icons";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useHistory } from "react-router";

import "./index.css"

export default function HomeAdmin() {
  const history = useHistory()
  return (
    <React.Fragment>
      <Header />
      <div className="container my-4 content-row">
        <div className="row ">
          <div className="col-12">
            <img src={banner} alt="" className="w-100" />
            <p className="text-center my-4 welcome-text"><b>Bienvenido Administrador</b></p>
          </div>
        </div>
        <div className="row icons-home mt-4">
          <div className="col-6 col-lg-3">
            <button className="btn-menu" onClick={() => { history.push("/users") }}>
              <Icons value={'doctor'} />
              <p className="icon-label pb-lg-0">Usuarios</p>
            </button>
          </div>
          <div className="col-6 col-lg-3">
            <button className="btn-menu" onClick={() => { history.push("/products-admin") }}>
              <Icons value={'products'} />
              <p className="icon-label pb-lg-0">Productos</p>
            </button>
          </div>
          <div className="col-6 col-lg-3">
            <button className="btn-menu" onClick={() => { history.push("/articles-admin") }}>
              <Icons value={'articles'} />
              <p className="icon-label">Artículos</p>
            </button>
          </div>
          <div className="col-6 col-lg-3">
            <button className="btn-menu" onClick={() => { history.push("/webinars-admin") }}>
              <Icons value={'webinars'} />
              <p className="icon-label">Webinars</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}