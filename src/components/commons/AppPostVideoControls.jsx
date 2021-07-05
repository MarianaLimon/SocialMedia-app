import React from "react";

import Styles from './AppPostVideoControls.module.css'

import AppImage from "./AppImage";


import fastbackward from "../../img/card/bx_bxs-fast-forward-circle.png"
import fastforward from "../../img/card/bx_bxs-fast-backward-circle.png"
import play from "../../img/card/ant-design_play-circle-filled.png"



export default function AppPostVideoControls() {

    return (
        <React.Fragment>
    
            <div className={`${Styles.ControlsWrapper}`}>
                <AppImage classImage={``} pathImage={fastbackward} altImage="fast-backward-icon"></AppImage>
                <AppImage classImage={``} pathImage={play} altImage="play-icon"></AppImage>
                <AppImage classImage={``} pathImage={fastforward} altImage="fast-forward-icon"></AppImage>
            </div>
    
        </React.Fragment>
    );
}