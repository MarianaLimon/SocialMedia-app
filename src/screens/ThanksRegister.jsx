import React, { useState } from "react";
import banner from "../img/doctor-banner.png"
import AppButton from "../components/commons/AppButton";

export default function TnksRegister() {

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="col-md-6 my-4">
            <h1 className="my-4">REGISTRO</h1>
            <p className="tnks">Gracias por registrarse</p>
            <p className="text-center pb-4">Le hemos enviado un correo de confirmación</p>
            <AppButton classButton="secondary w-50 d-block mx-auto my-5" type="submit" text="IR AL INICIO" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}