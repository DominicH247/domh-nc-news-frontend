import React from "react";
import Voter from "./Voter";
import Delete from "./Delete";
import {
  CommentCardSection,
  AuthorIcon,
  AuthorIconP
} from "../styles/CommentCardStyles";

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
