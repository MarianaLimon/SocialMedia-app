import React, { useEffect, useState } from "react";

import { getCountLikesByDocument } from "../../services/likes";
import { getCountRepliesByDocument } from "../../services/replies";

import Icons from "../commons/icons";

import Styles from "./AppPostReactions.module.css";

const AppPostReactions = (props) => {
  const [likes, setLikes] = useState("0");
  const [replies, setReplies] = useState("0");

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

  return (
    <React.Fragment>
      {/* Reactions */}
      <div className={`${Styles.Reactions}`}>
        <div className={`${Styles.ReactionsWrapper}`}>
          <a href={props.linkLike?props.linkLike:"#"}>
            <Icons value="likes" />
            <span>{likes}</span>
            <span className={`${Styles.ReactionsText}`}>Likes</span>
          </a>
          <a href={props.linkReply?props.linkReply:"#"}>
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
