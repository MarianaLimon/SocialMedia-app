import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardArticle.module.css";

import banner from "../../img/card/banner-article.jpg";
import { getDateFormat } from "../../utils/functions";

export default function AppCardArticle({
  cardId,
  cardImage,
  cardTitle,
  cardLink,
  cardTags,
  cardAutor,
  cardAutorAvatar,
  cardDate,
  cardReplies,
  cardLikes,
  props,
}) {


  return (
    <React.Fragment>
      <article className="col-12 mb-4">
        <div className={`${Styles.CardArticles} card`}>
          <AppImage
            classImage={`${Styles.CardImage} card-img-top`}
            pathImage={cardImage ? cardImage : banner}
            altImage="banner-img"
          ></AppImage>

          <div className="card-body">
            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
              <a href={cardLink ? cardLink : "#"}>
                {cardTitle ? cardTitle : "Title"}
              </a>
            </h2>

            {/* Tags */}
            <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}>
              {cardTags
                ? cardTags.map((tag) => `#${tag} `)
                : "#webdev #wordpress #frontend #tutorial"}{" "}
            </div>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo
              estado="full-info"
              authorName={cardAutor ? cardAutor : ""}
              authorAvatar={cardAutorAvatar ? cardAutorAvatar : ""}
              postDate={cardDate ? getDateFormat(cardDate) : ""}
            />

            {/* Reactions */}
            <AppPostReactions
              idDocument={cardId ? cardId : ""}
              typeDomument="articles"
            />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}
