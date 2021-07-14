import React, { useEffect, useState } from "react";

import { getRepliesByDocumentId, postReply } from "../../services/replies";
// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import { whois } from "../../utils/functions";
import AppTextarea from "../commons/AppTextarea";
import AppPostAuthorInfo from "./AppPostAuthorInfo";
//import AppPostReactions from "./AppPostReactions";
import { getDateFormat } from "../../utils/functions";


import Styles from "./AppCardArticleDetail.module.css";

//import banner from "../../img/card/banner-article.jpg";

export default function AppCardReplies({
  documentType,
  documentId,
  cardTitle,
  cardLink,
  cardTags,
  cardAutor,
  cardAutorAvatar,
  cardDate,
  cardReplies,
  cardLikes,
  cardContent,
  ...props
}) {
  const [replies, setReplies] = useState([]);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    if (documentType && documentId) {
      requestReplies(documentType, documentId);
    }
  }, [documentType, documentId]);

  const requestReplies = async (type, id) => {
    const json = await getRepliesByDocumentId(type, id);
    setReplies(json);
  };

  const buildReplies = ([
    key,
    {
      comment,
      document_type,
      document_id,
      creationdate: replyDate,
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
          postDate={replyDate ? getDateFormat(replyDate) : ""}
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
    const userLogged = whois();
    try {
      const newReply = {
        user_id: userLogged.id,
        comment: userComment,
        document_type: documentType,
        document_id: documentId,
      };
      console.log(newReply);

      setUserComment("");
      const reply = await postReply(newReply);
      if (reply.success) {
        requestReplies(documentType, documentId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${Styles.ReplyCard}`}>
      {/* /////////////////  Seccion Comments  ////////////// */}
      <div className="w-100">
        {/* ************* Lists Comments ************** */}

        {replies.length ? Object.entries(replies).map(buildReplies) : null}

        {/* Fin del Comment List */}
        {/* ************* Post Comments ************** */}

        <form onSubmit={handleSubmit} className="needs-validation">
          {/* Contenedor del avatar y el name 
            <AppPostAuthorInfo estado="none"/>*/}

          <div className="d-flex justify-content-center"> ... </div>
          {/* Seccion para Publicar un Comentario    */}
          <div className={`${Styles.CommentWrapper} w-100 my-2 `}>
            <AppTextarea
              idInput="replytext"
              classTextArea=" w-100 "
              placeholder="Agrege un nuevo comentario"
              value={userComment}
              onChange={(event) => setUserComment(event.target.value)}
            />
            <button
              type="submit"
              className="btn"
              id="reply-comment"
              disabled={!userComment}
            >
              Comentar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
