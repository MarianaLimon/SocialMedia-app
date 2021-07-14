import React, { useEffect, useState } from "react";

import { getCountLikesByDocument, postLike, deleteLike, getLikeByUser } from "../../services/likes";
import { getCountRepliesByDocument } from "../../services/replies";
import jwt_decode from "jwt-decode";
import Icons from "../commons/icons";

import Styles from "./AppPostReactions.module.css";

const AppPostReactions = (props) => {
  const [likes, setLikes] = useState("0");
  const [replies, setReplies] = useState("0");
  const [updateLike, setUpdateLike] = useState(false)
  const decoded = jwt_decode(localStorage.getItem("token"));
  useEffect(() => {
    if (props.idDocument && props.typeDomument) {
      requestLikes(props.typeDomument, props.idDocument);
      requestReplies(props.typeDomument, props.idDocument);
    }
  }, [props]);

  const requestLikes = async (type, id) => {
    const json = await getCountLikesByDocument(type, id);
    setLikes(json);
  };

  const requestReplies = async (type, id) => {
    const json = await getCountRepliesByDocument(type, id);
    setReplies(json);
  };

  const handler = async (event) => {
    event.preventDefault();

    //Buscar el id del like del documento si es que existe
    const dataLike = {
      user_id: decoded.id,
      document_id: props.idDocument
    }
    const likeBD = await getLikeByUser(dataLike)
    const countLike = likeBD.data.like

    if (countLike.length === 0) {
      //hacer post del like

      const newLike = {
        document_type: props.typeDomument,
        document_id: props.idDocument,
        user_id: decoded.id
      }
      //document_type, document_id, user_id
      const json = await postLike(newLike);
      const idLike = json.data.likes._id

      setUpdateLike(true)
    } else {
      //eliminar el like

      const json = await deleteLike(countLike[0]._id)
      setUpdateLike(true)

    }
  }

  useEffect(() => {
    if (updateLike) {

      const requestLikes = async (type, id) => {
        const json = await getCountLikesByDocument(type, id);
        setLikes(json);

        setUpdateLike(false)
      };

      requestLikes(props.typeDomument, props.idDocument);
    }
  }, [updateLike])

  return (
    <React.Fragment>
      {/* Reactions */}
      <div className={`${Styles.Reactions}`}>
        <div className={`${Styles.ReactionsWrapper}`}>
          <a href={props.linkLike ? props.linkLike : ""} onClick={handler}>
            <Icons value="likes" />
            <span>{likes}</span>
            <span className={`${Styles.ReactionsText}`}>Likes</span>
          </a>
          <a href={props.linkReply ? props.linkReply : "#"}>
            <Icons value="comments" />
            <span>{replies}</span>
            <span className={`${Styles.ReactionsText}`}>Comments</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppPostReactions;
