import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import {
  ArticleCardDiv,
  TopicIcon,
  TopicIconP,
  AuthorIcon,
  AuthorIconP,
  DateP
} from "../styles/ArticleCardStyles";

const ArticleCard = ({
  topic,
  title,
  author,
  created_at,
  article_id,
  comment_count,
  votes,
  topic_icon,
  avatar_url
}) => {
  const createdAt = new Date(created_at);

  const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth()}-${createdAt.getFullYear()}`;

  return (
    <ArticleCardDiv>
      <Link to={`/articles/${article_id}`}>
        <TopicIcon topic_icon={topic_icon}>
          <TopicIconP>t/ {topic}</TopicIconP>
        </TopicIcon>
        <AuthorIcon author_icon={avatar_url}>
          <AuthorIconP>Posted by u/ {author}</AuthorIconP>
        </AuthorIcon>
        {title}
        <br />
        <DateP>Date: {formattedDate}</DateP>
      </Link>
      <Voter
        votes={votes}
        id={article_id}
        type={"comment"}
        comment_count={comment_count}
      />
    </ArticleCardDiv>
  );
};

export default ArticleCard;
