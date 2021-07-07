import React, { useState } from "react";
import AppCardArticle from "../../../components/Cards/AppCardArticle"
import AppImage from "../../../components/commons/AppImage"
import filter from "../../../img/clarity_filter-solid.png"
import Styles from "./index.module.css"

export default function ArticlesList() {

  return (
    <React.Fragment>

      <div className="col-12 container">

      <AppImage classImage={`${Styles.FilterImage}`} pathImage={filter} altImage="filter-img"></AppImage>

      <h1 className={`${Styles.TitleSection}`}>Articles</h1>
        <div className="row">
              <AppCardArticle/>
              <AppCardArticle/>
              <AppCardArticle/>
        </div>
      </div>

    </React.Fragment>
  );
}