import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "./AppImage";
import AppTextarea from "./AppTextarea";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardArticleDetail.module.css"

import banner from "../../img/card/banner.jpg"
import author from "../../img/card/author.jpg"

export default function AppCardArticleDetail(props) {

  return (
    <React.Fragment>

    <article className="card mb-3 nav-view-post">

        <AppImage classImage="card-img-top w-100" pathImage={banner} altImage="banner-img"></AppImage>

        <div className={`card-body ${Styles.CardBody}`}>

            {/* Title */}
            <h2 className={`${Styles.PublishedTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Tags */}
            <div className={`${Styles.PublishedTags} tags-color d-flex flex-wrap`}> #webdev #wordpress #frontend #tutorial </div>

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo estado="full-info"/>

            {/* Content */}
            <div className={`${Styles.PublishedContent}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum.</p>
            </div>

            {/* Reactions */}
            <AppPostReactions/>

        </div>  {/* Fin del Card Body */}


        {/* /////////////////  Seccion Comments  ////////////// */}

        <div class={`${Styles.ReplyCard}`}>
            
            <div class="w-100">
                    {/* ************* Lists Comments ************** */}

                    <div className="CommentList my-3">

                        {/* Contenedor del avatar y el name */}
                        <AppPostAuthorInfo cname="justify-content-between" estado="full-info"/>

                        {/* Contenedor del comment publicado */}
                        <div class={`w-100 p-2 my-2 border rounded`}>
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
