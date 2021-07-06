import React from "react";

import Styles from './AppPostVideoBanner.module.css'

import AppImage from "../commons/AppImage";


import banner from "../../img/card/banner-webinar.jpg"
import play from "../../img/card/play.png"


export default function AppPostVideoBanner(props) {


    if(props.size === "webinar-detail") {
        return (
                <div className={`${Styles.Banner}`}>
                    <AppImage classImage={`${Styles.CardIconPlay}`} pathImage={play} altImage="play-icon"></AppImage>
                    <AppImage classImage={`${Styles.CardImageHigher} w-100`} pathImage={banner} altImage="banner-img"></AppImage>                
                </div>        
        )
    }

    return (
        <React.Fragment>
            <div className={`${Styles.Banner}`}>
                <AppImage classImage={`${Styles.CardIconPlay}`} pathImage={play} altImage="play-icon"></AppImage>
                <AppImage classImage={`${Styles.CardImage} w-100`} pathImage={banner} altImage="banner-img"></AppImage>                
            </div>     
        </React.Fragment>
    );
}