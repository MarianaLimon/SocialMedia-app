import React, { useState } from "react";
import AppCardWebinar from "../../../components/Cards/AppCardWebinar"
import AppImage from "../../../components/commons/AppImage"
import filter from "../../../img/clarity_filter-solid.png"
import Styles from "./index.module.css"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function WebinarsList() {

  return (
    <React.Fragment>
      <Header />
      <div className="col-12 container">

      <AppImage classImage={`${Styles.FilterImage}`} pathImage={filter} altImage="filter-img"></AppImage>
      <h1 className={`${Styles.TitleSection}`}>Webinars</h1>
      
        <div className="row">
              <AppCardWebinar/>
              <AppCardWebinar/>
              <AppCardWebinar/>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}