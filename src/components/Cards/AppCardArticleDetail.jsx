import React from "react";

import AppImage from "../commons/AppImage";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostReactions from "./AppPostReactions";
import AppCardReplies from "./AppCardRplies";
import Styles from "./AppCardArticleDetail.module.css";
import banner from "../../img/card/banner-article.jpg";
import { getDateFormat } from "../../utils/functions";

export default function AppCardArticleDetail({
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
  cardContent,
  props,
}) {
  const buildTags = (tag, index) => {
    return (
      <React.Fragment key={index}>
        <span className="me-2">#{tag}</span>
      </React.Fragment>
    );
  };

  return (
    <article key={cardId} className="card mb-3">
      <AppImage
        classImage="card-img-top w-100"
        pathImage={cardImage ? cardImage : banner}
        altImage="banner-img"
      ></AppImage>
      <div className={`card-body ${Styles.CardBody}`}>
        {/* Title */}
        <h2 className={`${Styles.PublishedTitle}`}>
          <a href={cardLink ? cardLink : "#"}>
            {cardTitle ? cardTitle : "Title"}
          </a>
        </h2>

        {/* Tags */}
        <div className={`${Styles.PublishedTags} tags-color d-flex flex-wrap`}>
          {cardTags && cardTags.map(buildTags)}
        </div>

        {/* Contenedor del avatar y el name */}
        <AppPostAuthorInfo
          estado="full-info"
          authorName={cardAutor ? cardAutor : ""}
          authorAvatar={cardAutorAvatar ? cardAutorAvatar : ""}
          postDate={cardDate ? getDateFormat(cardDate) : ""}
        />

        {/* Content */}
        <div
          className={`${Styles.PublishedContent}`}
          dangerouslySetInnerHTML={{ __html: cardContent }}
        ></div>

        {/* Reactions */}
        <AppPostReactions
          idDocument={cardId ? cardId : ""}
          typeDomument="articles"
          linkReply="#replytext"
        />
      </div>{" "}
      {/* Fin del Card Body */}

      {/* /////////////////  Seccion Comments  ////////////// */}
      <AppCardReplies documentId={cardId} documentType={"articles"} />
    </article>
  );
}
