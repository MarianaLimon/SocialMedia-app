import React, { useState } from "react";
import banner from "../../../img/home-banner.png"
import Icons from "../../../components/commons/icons";

export default function HomeDoctor() {

  return (
    <React.Fragment>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <img src={banner} alt="" className="w-100 }" />
            <p className="text-center my-4"><b>Bienvenido Dr. Perenganito López</b></p>
          </div>
        </div> 
        <div className="row icons-home mt-4">
          <div className="col-md-4">
            <a href="">
              <Icons value={'products'}/>
              <p className="icon-label pb-4 pb-lg-0">Productos</p>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
              <Icons value={'articles'}/>
              <p className="icon-label">Artículos</p>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
              <Icons value={'webinars'}/>
              <p className="icon-label">Webinars</p>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}