import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppTextarea from "../commons/AppTextarea";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostDateCreation from "./AppPostDateCreation";
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardProductDetail.module.css"

import banner from "../../img/card/banner-product.jpg"

export default function AppCardProductDetail({
    cardId,
    cardLink,
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
}) {

    const buildTags = (tag, index) => {
        return (
          <React.Fragment key={index}>
            <span className="me-2">#{tag}</span>
          </React.Fragment>
        );
      };

  return (
    <React.Fragment>

    <article className="card mb-3">

        <AppImage classImage="card-img-top w-100" pathImage={banner} altImage="banner-img"></AppImage>

        <div className={`card-body ${Styles.CardBody}`}>

            {/* Title */}
            <h2 className={`${Styles.PublishedTitle}`}>
                <a href="#">{cardName ? cardName : "Title"}</a>
            </h2>

            {/* Tags */}
            <div className={`${Styles.PublishedTags} tags-color d-flex flex-wrap`}> 
                {cardTags && cardTags.map(buildTags)}
            </div>


            {/* Content */}
            <div className={`${Styles.PublishedContent}`}>
                <p>{general_description ? general_description : "..."}</p>
            </div>

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

        <div className={`${Styles.ReplyCard}`}>
            
            <div className="w-100">
                    {/* ************* Lists Comments ************** */}

                    <div className="CommentList my-3">

                        {/* Contenedor del avatar y el name */}
                        <AppPostAuthorInfo  cname="justify-content-between" estado="full-info"/>

                        {/* Contenedor del comment publicado */}
                        <div className={`w-100 p-2 my-2 border rounded`}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, consequatur?</p>
                        </div>                        
                     </div>  {/* Fin del Comment List */}

                    {/* ************* Post Comments ************** */}
                    
                    {/* Contenedor del avatar y el name */}
                    <AppPostAuthorInfo
                    estado=" "
                    authorName={cardAutor ? cardAutor : ""}
                    authorAvatar={cardAutorAvatar ? cardAutorAvatar : ""}
                    postDate={cardDate ? cardDate : ""}
                    />
                        
                     {/* Seccion para Publicar un Comentario    */}
                    <div className={`${Styles.CommentWrapper} w-100 my-2 `}>
                        <AppTextarea classTextArea=" w-100 " placeholder="Add to the discussion" />
                        <button type="button" className="btn" id="reply-comment">Comentar</button> 
                    </div>

            </div>
        </div>

    </article>

    </React.Fragment>
  );
}
