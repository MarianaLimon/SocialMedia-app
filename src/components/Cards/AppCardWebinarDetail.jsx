import React from "react";


import AppTextarea from "../commons/AppTextarea";
import AppPostVideoBanner from "./AppPostVideoBanner";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardWebinarDetail.module.css"

export default function AppCardWebinarDetail(props) {

  return (
    <React.Fragment>

    <article className="card mb-3">

        {/* Banner del Webinar */}
        <AppPostVideoBanner size="webinar-detail"/>

        <div className={`card-body ${Styles.CardBody}`}>

            {/* Title */}
            <h2 className={`${Styles.PublishedTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo estado="full-info"/>

            {/* Reactions */}
            <AppPostReactions/>

            {/* Content */}
            <div className={`${Styles.PublishedContent}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum.</p>
            </div>

        </div>  {/* Fin del Card Body */}


        {/* /////////////////  Seccion Comments  ////////////// */}

        <div className={`${Styles.ReplyCard}`}>
            
            <div className="w-100">
                    {/* ************* Lists Comments ************** */}

                    <div className="CommentList my-3">

                        {/* Contenedor del avatar y el name */}
                        <AppPostAuthorInfo cname="justify-content-between" estado="full-info"/>

                        {/* Contenedor del comment publicado */}
                        <div className={`w-100 p-2 my-2 border rounded`}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, consequatur?</p>
                        </div>                        
                     </div>  {/* Fin del Comment List */}

                    {/* ************* Post Comments ************** */}
                    
                    {/* Contenedor del avatar y el name */}
                    <AppPostAuthorInfo estado=" "/>

                        
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
