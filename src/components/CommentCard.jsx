import React from "react";
import Voter from "./Voter";
import Delete from "./Delete";
import styled from "styled-components";

const CommentCardSection = styled.section`
  /* border: solid black; */
  margin-bottom: 13px;
  box-shadow: 0px 1px 1px #376b7b;
`;

const AuthorIcon = styled.div`
  background-image: url(${props => props.author_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 35px;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AuthorIconP = styled.p`
  margin-left: 60px;
  margin-bottom: 0;
  margin-top: 15px;
  font-size: 0.8em;
  padding-top: 12px;
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
  username,
  author_icon
}) => {
  const createdAt = new Date(created_at);

  const formattedDate = `${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}, ${createdAt.getDate()}-${createdAt.getMonth() +
    1}-${createdAt.getFullYear()}`;

  return (
    <CommentCardSection>
      <AuthorIcon author_icon={author_icon}>
        <AuthorIconP>
          {author} at {formattedDate}
        </AuthorIconP>
      </AuthorIcon>
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
