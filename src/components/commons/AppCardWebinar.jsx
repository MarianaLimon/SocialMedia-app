import React from "react";

import Icons from "./icons";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "./AppImage";
import AppPostAuthorInfo from "./AppPostAuthorInfo"

import Styles from "./AppCardWebinar.module.css"

import banner from "../../img/card/banner.jpg"
import play from "../../img/card/play.png"


export default function AppCardArticle() {

  return (
    <React.Fragment>


    <article className="card mb-3 nav-view-post">


        <div className="card-body">

            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo estado="full-info"/>

            <div className={`${Styles.Banner}`}>
                <AppImage classImage={`${Styles.CardIconPlay}`} pathImage={play} altImage="play-icon"></AppImage>
                <AppImage classImage={`${Styles.CardImage} w-100`} pathImage={banner} altImage="banner-img"></AppImage>                
            </div>


            {/* Content */}
            <div className={`${Styles.Content}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum.</p>
            </div>


        </div>
    </article>

    </React.Fragment>
  );
}
