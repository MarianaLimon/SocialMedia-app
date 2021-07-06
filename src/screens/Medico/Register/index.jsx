import React, { useState } from "react";
import banner from "../../../img/doctor-banner.png"
import Input from "../../../components/commons/AppInput";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";

export default function Register() {

  const termins = () => {
    return(
      <AppButton type="anchor" text="Términos y Condiciones"/>
    )
  }

  return (
    <React.Fragment>
      <div className="register-container container">
        <div className="row">
          <div className="col-md-6 my-4">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="form-wrapper col-md-6">
            <h1 className="my-4">REGISTRO</h1>
            <form action="">
              <Input placeholder="Nombre" type="text" required />
              <Input placeholder="Apellido Paterno" type="text" required />
              <Input placeholder="Apellido Materno" type="text" required />
              <Input placeholder="Correo electrónico" type="email" required />
              <Input placeholder="Contraseña" type="password" required />
              <Input placeholder="Confirme su contraseña" type="password" required />
              <Input placeholder="Cédula Profesional" type="text" required />
              <Input placeholder="Especialidad" type="text" required />
              <Input placeholder="Upload Foto Cédula" type="text" required />
              {/* <AppCheckbox label={termins()}/> */}
              <AppCheckbox label={`Acepto los ${<AppButton type="anchor" text="Términos y Condiciones"/>}`} />
              <AppButton classButton="secondary w-50 d-block mx-auto my-5" type="submit" text="Registrar" />
            </form>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}