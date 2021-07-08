import React, { useState } from "react";
import LeftMenu from "../../../components/LeftMenu";
import AppImage from "../../../components/commons/AppImage";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import AppButton from "../../../components/commons/AppButton";

export default function UserValidate() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <h1 className="my-4">
              <b>Validación de Usuario</b> 
            </h1>
            <div>
              <AppImage pathImage="https://avatars.githubusercontent.com/u/17584137?v=4" classImage="w-25" altImage=""/>
            </div>
          </div>
        </div>   
      </div>
      <Footer />
    </React.Fragment>
  );
}