import React from "react";
import ReactDOM from "react-dom";

import AppImage from "./AppImage";
import Styles from "./AppPostAuthorInfo.module.css";

import author from "../../img/card/author.jpg"

const AppPostAuthorInfo = props => {
    
    if (props.estado === "full-info") {
        return (
            <React.Fragment>
                {/* Contenedor del avatar y el name */}
                <div className={`${props.cname} ${Styles.AuthorWrapper} py-2`}>
                    <div className={`${Styles.AuthorData}`}>
                        <AppImage classImage="avatar" pathImage={author} altImage="author-img"></AppImage>
                        <div className={`${Styles.AuthorName}`}>
                            <div>Author Name</div>
                        </div>
                    </div>   
                    <div className={`${Styles.DateData}`} >
                        <div>Publication date</div>                        
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {/* Contenedor del avatar y el name */}
            <div className={`${Styles.AuthorWrapper} py-2`}>
                <div className={`${Styles.AuthorData}`}>
                    <AppImage classImage="avatar" pathImage={author} altImage="author-img"></AppImage>
                    <div className={`${Styles.AuthorName}`}>
                        <div>Author Name</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );        
}

export default AppPostAuthorInfo;