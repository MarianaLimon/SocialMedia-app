import React from "react";

import AppImage from "../commons/AppImage";
import AppPostDateCreation from "./AppPostDateCreation";
import Styles from "./AppPostAuthorInfo.module.css";

import author from "../../img/card/author.jpg";

const AppPostAuthorInfo = (props) => {
  if (props.estado === "full-info") {
    return (
      <React.Fragment>
        {/* Contenedor del avatar y el name */}
        <div className={`${Styles.AuthorWrapper} ${props.dstate} py-2`}>
          <div className={`${Styles.AuthorData} w-100`}>
            <AppImage
              classImage="avatar"
              pathImage={props.authorAvatar ? props.authorAvatar : author}
              altImage="author-img"
            ></AppImage>
            <div className={`${Styles.AuthorName} w-100  ${props.cname}`}>
              <div>{props.authorName ? props.authorName : "Author Name"}</div>

              {/* Publication Date */}
              <AppPostDateCreation
                cname="none"
                postDate={props.postDate ? props.postDate : ""}
              />
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
          <AppImage
            classImage="avatar"
            pathImage={props.authorAvatar ? props.authorAvatar : author}
            altImage="author-img"
          ></AppImage>
          <div className={`${Styles.AuthorName}`}>
            <div>{props.authorName ? props.authorName : "Author Name"}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppPostAuthorInfo;

/* 
    el estado: "full-info" es apra mostrar la info del autor y la fecha de creacion
    si dehajmos el estado en blanco solo mostrara la info del autor 

    <AppPostAuthorInfo dstate="d-none or d-block" cname="justify-content-between" estado="full-info"/> 
*/
