import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppTextarea from "../commons/AppTextarea";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostDateCreation from "./AppPostDateCreation";
import AppPostReactions from "./AppPostReactions";
import AppCardReplies from "./AppCardRplies";

import Styles from "./AppCardProductDetail.module.css"

import banner from "../../img/card/banner-product.jpg"

export default function AppCardProductDetail({
    cardId,
    cardCategory,
    cardName,
    cardImage,
    cardTags,
    sustance,
    formulation,
    terapeutic_indications,
    general_description,
    dose,
    cardDate,
    updatedate,

    cardAutor,
    cardAutorAvatar,
    cardLink
}) {


  return (
    <React.Fragment>

    <article className="card mb-3">

        <AppImage classImage={`${Styles.CardImage} card-img-top w-100`} pathImage={cardImage} altImage="banner-img"></AppImage>

        <div className={`card-body ${Styles.CardBody}`}>

            {/* Title */}
            <div className="col-12 d-block d-lg-flex align-items-center">
                <h2 className={`${Styles.PublishedTitle}`}>
                    {cardName ? cardName : "Nombre del Producto"}
                </h2>  

                <h5 className={`${Styles.PublishedSustance} pl-3`}>
                    ({sustance ? sustance : "Sustancia"})
                </h5>     
            </div>

            <p className={`${Styles.PublishedFormula}`}>
                {formulation ? formulation : "formulacion..."}
            </p>

            {/* Categorys */}
            <div className={`${Styles.PublishedTags} tags-color d-flex flex-wrap`}> 
                {cardCategory && cardCategory}
            </div>

            <h2 className={`${Styles.PublishedTitle}`}>
                Indicaciones terapeúticas
            </h2>  

            <p className={`${Styles.PublishedFormula}`}>
                {terapeutic_indications ? terapeutic_indications : "incidaciones..."}
            </p>

            <h2 className={`${Styles.PublishedTitle}`}>
                Dosis y Vía de adminstración
            </h2>  

            <p className={`${Styles.PublishedFormula}`}>
                {dose ? dose : "dosis..."}
            </p>

            <h2 className={`${Styles.PublishedTitle}`}>
                Descripción General
            </h2>  

            <div className={`${Styles.PublishedContent}`}>
                <p>{general_description ? general_description : "..."}</p>
            </div>

            <p className={`${Styles.Dates}`}>Creado: {cardDate} <br /> Modificado: {updatedate}</p>

            {/* Reactions and Creation Date */}
            <div className={`py-2`}>

                <div className="row d-flex align-items-center">
                    <div className="col-12 col-lg-9">

                        {/* Reactions */}
                        <AppPostReactions
                        idDocument={cardId ? cardId : ""}
                        typeDomument="articles"
                        linkReply="#replytext"
                        />

                    </div>

                    <div className="col-12 col-lg-3">

                        {/* Creation Date */}
                        <AppPostDateCreation cname="text-end"/>

                    </div>
                </div>

            </div>

        </div>  {/* Fin del Card Body */}


      {/* /////////////////  Seccion Comments  ////////////// */}
      <AppCardReplies documentId={cardId} documentType={"articles"} />

    </article>

    </React.Fragment>
  );
}
