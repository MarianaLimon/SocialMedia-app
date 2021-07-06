import React from "react";

import AppPostAuthorInfo from "./AppPostAuthorInfo"
import AppPostVideoBanner from "./AppPostVideoBanner"
import AppPostVideoControls from "./AppPostVideoControls"

import Styles from "./AppCardWebinar.module.css"

export default function AppCardArticle() {

  return (
    <React.Fragment>


    <article className={`${Styles.CardWebinar} card mb-3`}>


        <div className="card-body">

            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo estado="full-info"/>

            {/* Contenedor Banner */}
            <AppPostVideoBanner/>

            {/* Contenedor Controls */}
            <AppPostVideoControls/>


            {/* Content */}
            <div className={`${Styles.Content}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum.</p>
            </div>

        </div>
    </article>

    </React.Fragment>
  );
}
