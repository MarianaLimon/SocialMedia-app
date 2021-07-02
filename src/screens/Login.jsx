import React, { useState } from "react";
import banner from "../img/doctora-banner.png"
import Input from "../components/commons/AppInput";
import AppButton from "../components/commons/AppButton";

export default function Login() {

  return (
    <React.Fragment>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 my-3">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="col-md-6 my-4">
            <h1 className="my-5">INICIAR SESIÓN</h1>
            <form action="" className="mx-5">
              <Input placeholder="Correo electrónico" type="email" required />
              <Input placeholder="Contraseña" type="password" required />
              <AppButton classButton="secondary w-50 d-block mx-auto mt-5" type="submit" text="INGRESAR" />
              <p className="text-center">¿Aún no estás registrado?<AppButton classButton="aqua" type="anchor" text="Registrate aquí" /></p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}