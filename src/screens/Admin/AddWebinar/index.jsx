import React, { useState } from "react";
import LeftMenu from "../../../components/LeftMenu";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Input from "../../../components/commons/AppInput";
import AppButton from "../../../components/commons/AppButton";
import AppSelect from "../../../components/commons/AppSelect";
import EditorDraft from "../../../components/EditorDraft";
import AppDragDrop from "../../../components/commons/AppDragDrop"

import "./index.css"

export default function AddWebinar() {

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
              <b>Agregar Webinar</b> 
            </h1>
            <form action="">
              <Input
                id=""
                placeholder="Nombre del webinar"
                type="text"
                value=""
                required
              />
              <Input
                id=""
                placeholder="Nombre del ponente"
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
              
              <div className="columns">
                <Input
                  id=""
                  placeholder=""
                  type="time"
                  value=""
                  required
                  className="webinar-duration"
                />
                <Input
                  id=""
                  placeholder="S"
                  type="date"
                  value=""
                  required
                  className="webinar-date"
                />
              </div>
              
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