import React from "react";

import Icons from "./icons";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "./AppImage";
import AppPostAuthorInfo from "./AppPostAuthorInfo"
import AppPostReactions from "./AppPostReactions"

import Styles from "./AppCardArticle.module.css"

import banner from "../../img/card/banner.jpg"
import author from "../../img/card/author.jpg"

export default function AppCardArticle() {

  return (
    <React.Fragment>

        <article className="card mb-3 nav-view-post">

            <AppImage classImage={`${Styles.CardImage} w-100`} pathImage={banner} altImage="banner-img"></AppImage>

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
        </article>

    </React.Fragment>
  );
}
