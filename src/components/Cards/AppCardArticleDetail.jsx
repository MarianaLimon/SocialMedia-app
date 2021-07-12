import React, {useEffect,useState} from "react";

import {getRepliesByDocumentId,postReply} from "../../services/replies"
// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppTextarea from "../commons/AppTextarea";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
import AppPostReactions from "./AppPostReactions";

import Styles from "./AppCardArticleDetail.module.css"

import banner from "../../img/card/banner-article.jpg"

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
    const [replies,setReplies]=useState([]);
    const [userComment,setUserComment]=useState("");
  
    useEffect(() => {
        if (cardId) {      
          requestReplies('articles',cardId);
        }
    }, [cardId]);
       
    const requestReplies = async (type, id) => {
        const json = await getRepliesByDocumentId(type, id);
        setReplies(json);
        console.log(json);
    }; 

    const buildTags = (tag, index) => {
        return (
          <React.Fragment key={index}>
            <span className="me-2">
            #{tag}
            </span>
          </React.Fragment>
        );
      };
      
    const buildReplies = ([
        key,
        {         
          comment,
          document_type,
          document_id,
          creationdate:replyDate,
          user_id: userReply,
          _id: id_reply,
        },
        ]) => {
        return (
            <div key={id_reply} className="CommentList my-3">

            {/* Contenedor del avatar y el name */}
            <AppPostAuthorInfo 
                cname="justify-content-between" 
                estado="full-info"
                authorName={`${userReply.firstname} ${userReply.lastname}`}
                authorAvatar={userReply.avatar_url}
                postDate={replyDate}
            />

            {/* Contenedor del comment publicado */}
            <div className={`w-100 p-2 border rounded`}>
                <p>{comment}</p>
            </div>                        
         </div>  

        );
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        /*if (!handleValidation()) {
          return false;
        }*/
        try {
            const newReply = {
                user_id:'60dfa499b9a79a247832c368',
                comment:userComment,
                document_type:'articles',
                document_id:cardId,
            };
            console.log(newReply)
            
            setUserComment("");
            const reply = await postReply(newReply);
            if (reply.success) {
                requestReplies('articles',cardId);
            }
         
        } catch (error) {
            console.log(error);
        }
    };

    return (
  
        <article key={cardId} className="card mb-3">

            <AppImage classImage="card-img-top w-100" pathImage={cardImage?cardImage:banner} altImage="banner-img"></AppImage>

            <div className={`card-body ${Styles.CardBody}`}>

                {/* Title */}
                <h2 className={`${Styles.PublishedTitle}`}>
                    <a href={cardLink ? cardLink : "#"}>{cardTitle?cardTitle:'Title'}</a>
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
                    postDate={cardDate ? cardDate : ""}
                />

                {/* Content */}
                <div className={`${Styles.PublishedContent}`} dangerouslySetInnerHTML={{__html: cardContent}} >
                    
                </div>

                {/* Reactions */}
                <AppPostReactions 
                    idDocument={cardId ? cardId : ""}
                    typeDomument="articles"
                    linkReply="#replytext"
                />

            </div>  {/* Fin del Card Body */}


            {/* /////////////////  Seccion Comments  ////////////// */}

            <div className={`${Styles.ReplyCard}`}>
                
                <div className="w-100">
                        {/* ************* Lists Comments ************** */}

                        {replies.length&& Object.entries(replies).map(buildReplies)}
                    
                        {/* Fin del Comment List */}
                        {/* ************* Post Comments ************** */}
                        
                        
                        <form onSubmit={handleSubmit} className="needs-validation">
                            {/* Contenedor del avatar y el name 
                        <AppPostAuthorInfo estado="none"/>*/}
                        
                        <div className="d-flex justify-content-center">  ...   </div>
                        {/* Seccion para Publicar un Comentario    */}
                        <div className={`${Styles.CommentWrapper} w-100 my-2 `}>
                            <AppTextarea 
                                idInput="replytext" 
                                classTextArea=" w-100 " 
                                placeholder="Agrege un nuevo comentario" 
                                value={userComment}
                                onChange={(event) => setUserComment(event.target.value)}
                            />
                            <button type="submit" className="btn" id="reply-comment" disabled={!userComment}>Comentar</button> 
                        </div>
                        </form>

                </div>
            </div>

        </article>

    
  );
}
