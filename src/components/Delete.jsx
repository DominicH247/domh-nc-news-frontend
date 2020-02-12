import React from "react";
import * as api from "../utils/api.js";
import styled from "styled-components";

const DeleteButton = styled.button`
  border: solid 2px #407d90;
  border-radius: 5px;
  color: white;
  background-color: #376b7b;
  padding-top: 5px;
  font-family: Spartan;
  text-align: center;
  margin-bottom: 10px;
`;

const Delete = props => {
  const handleDeleteClick = () => {
    api.deleteComment(props.comment_id).then(() => {
      props.fetchCommentsByArticleId();
    });
  };

  return (
    <DeleteButton onClick={handleDeleteClick}>Delete Comment</DeleteButton>
  );
};

export default Delete;
