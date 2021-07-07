import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppPostAuthorInfo from "./AppPostAuthorInfo"
import AppPostReactions from "./AppPostReactions"

import Styles from "./AppCardArticle.module.css"

import banner from "../../img/card/banner-article.jpg"

export default function AppCardArticle() {

  return (
    <React.Fragment>


        <article className="col-12 mb-4">

          <div className={`${Styles.CardArticles} card`}>

            <AppImage classImage={`${Styles.CardImage} card-img-top`} pathImage={banner} altImage="banner-img"></AppImage>

            <div className="card-body">

                {/* Title */}
                <h2 className={`${Styles.CardTitle}`}>
                    <a href="#">Title</a>
                </h2>

                {/* Tags */}
                <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}> #webdev #wordpress #frontend #tutorial </div>

                {/* Contenedor del avatar y el name */}
                <AppPostAuthorInfo estado="full-info"/>

                {/* Reactions */}
                <AppPostReactions/>

            </div>
          </div>
        </article>

    </React.Fragment>
  );
}
