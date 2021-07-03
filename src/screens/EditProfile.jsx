import React, { useState } from "react";
import AppImage from "../components/commons/AppImage";
import Input from "../components/commons/AppInput";
import AppCheckbox from "../components/commons/AppCheckbox";
import AppButton from "../components/commons/AppButton";

export default function EditProfile() {

  return (
    <React.Fragment>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col mb-5">
            <AppImage pathImage="https://avatars.githubusercontent.com/u/17584137?v=4" classImage="avatar-edit-profile" altImage=""/>
            <AppButton classButton="aqua w-25 d-block mx-auto my-5" type="submit" text="Subir foto de perfil" />            
            <form action="" >
              <div className="d-flex flex-column justify-content-center align-items-md-center">
                <Input placeholder="NickName" type="text" classContainerInput="w-50 " required/>
              </div>
              <div className="checkbox-list">
                <AppCheckbox label="Sobrepeso y Obesidad" />
                <AppCheckbox label="Gastro" />
                <AppCheckbox label="OTC" />
                <AppCheckbox label="Cardiovascular y Metabólico" />
                <AppCheckbox label="Salud Femenina" />
              </div>
              <AppButton classButton="aqua w-25 d-block mx-auto my-5" type="submit" text="Guardar cambios" />
              <AppButton classButton="secondary w-25 d-block mx-auto my-5" type="submit" text="Cerrar Sesión" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}