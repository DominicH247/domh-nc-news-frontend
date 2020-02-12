import React from "react";
import Voter from "./Voter";
import Delete from "./Delete";
import styled from "styled-components";

const CommentCardSection = styled.section`
  /* border: solid black; */
  margin-bottom: 13px;
  box-shadow: 0px 1px 1px #376b7b;
`;

const CommentCard = ({
  author,
  body,
  votes,
  comment_id,
  type,
  created_at,
  fetchCommentsByArticleId,
  isLoggedIn,
  username
}) => {
  return (
    <CommentCardSection>
      <p>
        {author} at {created_at}
      </p>
      <p>{body}</p>
      <Voter votes={votes} id={comment_id} type={type} />
      {author === username && isLoggedIn && (
        <Delete
          type={type}
          comment_id={comment_id}
          fetchCommentsByArticleId={fetchCommentsByArticleId}
        />
      )}
    </CommentCardSection>
  );
};

export default CommentCard;
