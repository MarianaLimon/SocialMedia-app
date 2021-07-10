import React, { useState } from "react";
import LeftMenu from "../../../components/LeftMenu";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Input from "../../../components/commons/AppInput";
import AppButton from "../../../components/commons/AppButton";
import AppSelect from "../../../components/commons/AppSelect";
import EditorDraft from "../../../components/EditorDraft";
import AppDragDrop from "../../../components/commons/AppDragDrop"

export default function AddProduct() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10 px-lg-5">
            <h1 className="mt-3 title-sections mb-4">
              <b>Agregar Producto</b> 
            </h1>
            <form action="">
              <Input
                id=""
                placeholder="Nombre del producto"
                type="text"
                value=""
                required
              />
              <AppDragDrop
                // stateUrl=""
                // callbackSetState=""
                textDragDrop="Arrastre la imagen principal"
                textBrowse="seleccione el archivo"
              />
              <Input
                id=""
                placeholder="Sustancia activa"
                type="text"
                value=""
                required
              />
              <AppSelect
                classSelect="AppInput_InputComponent"
                classLabel="col-12 mb-3"
                idSelect=""
                placeholder=""
                classContainerInput=""
              />
              <Input
                id=""
                placeholder="Forma farmacéutica y formulación"
                type="text"
                value=""
                required
              />
              <Input
                id=""
                placeholder="Indicaciones terapéuticas"
                type="text"
                value=""
                required
              />
              <Input
                id=""
                placeholder="Contraindicaciones"
                type="text"
                value=""
                required
              />
              <Input
                id=""
                placeholder="Restricciones de uso en el embarazo"
                type="text"
                value=""
                required
              />
              <Input
                id=""
                placeholder="Dosis y vía de administración"
                type="text"
                value=""
                required
              />
              
              <EditorDraft />

              <AppSelect
                classSelect="AppInput_InputComponent"
                classLabel="col-12 mb-3"
                idSelect=""
                placeholder=""
                classContainerInput=""
              />
              <AppButton classButton="aqua newArticle d-block mx-auto"  type="submit" text="GUARDAR" />
            </form>
          </div>
        </div>     
      </div>
      <Footer />
    </React.Fragment>
  );
}