import React from "react";

import AppPostAuthorInfo from "./AppPostAuthorInfo"
import AppPostVideoBanner from "./AppPostVideoBanner"
import AppPostVideoControls from "./AppPostVideoControls"
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardWebinar.module.css"

export default function AppCardArticle() {

  return (
    <React.Fragment>


    <article className="col-12 mb-4">

      <div className={`${Styles.CardWebinar} card`}>

          {/* Contenedor Banner ---- MOBILE*/}
          <AppPostVideoBanner dstate="d-flex d-md-none"/>

        <div className="card-body ">

            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo dstate="d-none d-md-block" estado="full-info"/>

            {/* Contenedor Banner */}
            <AppPostVideoBanner dstate="d-none d-md-flex"/>

            {/* Contenedor Controls */}
            <AppPostVideoControls/>
            
            {/* Title ---- Mobile */}
            <h2 className={`${Styles.CardTitleMobile}`}>
                <a href="#">Title</a>
            </h2>

            {/* Contenedor del avatar y el name ---- MOBILE */}
            <AppPostAuthorInfo className={``} dstate="d-flex d-md-none" cname={`d-flex ${Styles.WebinarAuthorInfo}`} estado="full-info"/>


            {/* Content */}
            <div className={`${Styles.Content}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum.</p>
            </div>

            {/* Reactions */}
            <AppPostReactions/>

          </div>
        </div>
    </article>

    </React.Fragment>
  );
}
