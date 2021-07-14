import React, { useState } from "react";
import banner from "../../img/doctor-banner.png"
import AppButton from "../../components/commons/AppButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./index.css"
import { useHistory } from "react-router-dom";

export default function TnksRegister() {

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row d-flex align-items-center content-row">
          <div className="col-lg-6 my-4">
            <img src={banner} alt="" className="banner-tnks" />
          </div>
          <div className="col-lg-6 my-4">
            <h1 className="my-4 text-center">REGISTRO</h1>
            <p className="tnks text-center">Gracias por registrarse</p>
            <p className="text-center pb-4">Le hemos enviado un correo de confirmación</p>
            <AppButton classButton="secondary w-50 d-block mx-auto my-5" type="submit" text="IR AL INICIO" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}