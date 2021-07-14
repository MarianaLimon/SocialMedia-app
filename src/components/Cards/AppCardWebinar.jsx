import React from "react";

import AppPostAuthorInfo from "./AppPostAuthorInfo"
import AppPostVideoBanner from "./AppPostVideoBanner"
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardWebinar.module.css"

export default function AppCardArticle({
  cardId,
  cardImage,
  cardTitle,
  cardLink,
  cardAutor,
  cardAutorAvatar,
  cardDate,
  cardDescription,
}) {

  return (
    <React.Fragment>


    <article className="col-12 mb-4">

      <div className={`${Styles.CardWebinar} card`}>

          {/* Contenedor Banner ---- MOBILE*/}
          <AppPostVideoBanner 
            dstate="d-flex d-md-none"
            pathImage={cardImage}
          />

        <div className="card-body ">

            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
              <a href={cardLink ? cardLink : "#"}>{cardTitle ? cardTitle : "Title"}</a>
            </h2>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo 
              dstate="d-none d-md-block" 
              estado="full-info"
              authorName={cardAutor ? cardAutor : ""}
              authorAvatar={cardAutorAvatar ? cardAutorAvatar : ""}
              postDate={cardDate ? cardDate : ""}
            />

            {/* Contenedor Banner */}
            <AppPostVideoBanner 
              dstate="d-none d-md-flex"
              pathImage={cardImage}
            />
            
            {/* Title ---- Mobile */}
            <h2 className={`${Styles.CardTitleMobile}`}>
                <a href={cardLink ? cardLink : "#"}>{cardTitle ? cardTitle : "Title"}</a>
            </h2>

            {/* Contenedor del avatar y el name ---- MOBILE */}
            <AppPostAuthorInfo 
              className={``} 
              dstate="d-flex d-md-none" 
              cname={`d-flex ${Styles.WebinarAuthorInfo}`} 
              estado="full-info"
              authorName={cardAutor ? cardAutor : ""}
              authorAvatar={cardAutorAvatar ? cardAutorAvatar : ""}
              postDate={cardDate ? cardDate : ""}
            />


            {/* Content */}
            <div className={`${Styles.Content}`}>
                <p>{cardDescription ? cardDescription : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum."}</p>
            </div>

            {/* Reactions */}
            <AppPostReactions
              idDocument={cardId ? cardId : ""}
              typeDomument="webinars"
            />

          </div>
        </div>
    </article>

    </React.Fragment>
  );
}
