import React from "react";
import ReactDOM from "react-dom";

import AppImage from "./AppImage";
import AppPostDateCreation from "./AppPostDateCreation";
import Styles from "./AppPostAuthorInfo.module.css";

import author from "../../img/card/author.jpg"

const AppPostAuthorInfo = props => {
    
    if (props.estado === "full-info") {
        return (
            <React.Fragment>
                {/* Contenedor del avatar y el name */}
                <div className={`${Styles.AuthorWrapper} py-2`}>
                    <div className={`${Styles.AuthorData} w-100`}>
                        <AppImage classImage="avatar" pathImage={author} altImage="author-img"></AppImage>
                        <div className={`${Styles.AuthorName} w-100  ${props.cname}`}>
                            <div>Author Name</div>

                            {/* Publication Date */}
                            <AppPostDateCreation cname="none"/>                            
                        </div>
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

{/* 

    el estado: "full-info" es apra mostrar la info del autor y la fecha de creacion
    si dehajmos el estado en blanco solo mostrara la info del autor 

    <AppPostAuthorInfo cname="justify-content-between" estado="full-info"/> 

*/}