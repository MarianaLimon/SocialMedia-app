import React from "react";

import Styles from "./AppPostVideoBanner.module.css";

import AppImage from "../commons/AppImage";
import banner from "../../img/card/banner-webinar.jpg";
import play from "../../img/card/play.png";

export default function AppPostVideoBanner(props) {
  if (props.size === "webinar-detail") {
    return (
      <div className={`${Styles.Banner} ${props.dstate} card-img-top`}>
        <AppImage
          classImage={`${Styles.CardIconPlay}`}
          pathImage={play}
          altImage="play-icon"
        />

        <AppImage
          classImage={`${Styles.CardImageHigher} w-100`}
          pathImage={props.pathImage ? props.pathImage : banner}
          altImage="banner-img"
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className={`${Styles.Banner} ${props.dstate} card-img-top`}>
        <a href={props.pathUrl && props.pathUrl}>
          <AppImage
            classImage={`${Styles.CardIconPlay}`}
            pathImage={play}
            altImage="play-icon"
          />

          <AppImage
            classImage={`${Styles.CardImage} w-100`}
            pathImage={props.pathImage ? props.pathImage : banner}
            altImage="banner-img"
          />
        </a>
      </div>
    </React.Fragment>
  );
}
