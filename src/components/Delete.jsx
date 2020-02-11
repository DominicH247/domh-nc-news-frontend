import React from "react";
import * as api from "../utils/api.js";

const Delete = props => {
  const handleDeleteClick = () => {
    api.deleteComment(props.comment_id).then(() => {
      props.fetchCommentsByArticleId();
    });
  };

  return <button onClick={handleDeleteClick}>Delete {`${props.type}`}</button>;
};

export default Delete;
