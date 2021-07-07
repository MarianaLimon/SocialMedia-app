import React, { useState } from "react";
import AppCardWebinar from "../../../components/Cards/AppCardWebinar"
import AppImage from "../../../components/commons/AppImage"
import filter from "../../../img/clarity_filter-solid.png"
import Styles from "./index.module.css"

export default function WebinarsList() {

  return (
    <React.Fragment>

      <div className="col-12 container">

      <AppImage classImage={`${Styles.FilterImage}`} pathImage={filter} altImage="filter-img"></AppImage>
      <h1 className={`${Styles.TitleSection}`}>Webinars</h1>
      
        <div className="row">
              <AppCardWebinar/>
              <AppCardWebinar/>
              <AppCardWebinar/>
        </div>
      </div>

    </React.Fragment>
  );
}