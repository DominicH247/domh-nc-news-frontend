import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import Voter from "./Voter";

// COMPONENT STYLING
const ArticleCardDiv = styled.div`
  @media only screen and (min-width: 601px) {
    grid-column-start: 3;
    width: auto;
    margin: 0;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #376b7b;
    color: white;
    padding-top: 30px;
    padding-left: 10px;
    margin-bottom: 13px;
    border: solid;
    border-width: 1px;
    border-color: #376b7b;
    border-radius: 5px;
    line-height: 1.5em;
    height: auto;
    font-size: 1.2em;
  }
  @media only screen and (max-width: 600px) {
    /* MOBILE */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #376b7b;
    color: white;
    padding-top: 30px;
    padding-left: 10px;
    margin-bottom: 13px;
    border: solid;
    border-width: 1px;
    border-color: #376b7b;
    border-radius: 5px;
    line-height: 1.8em;
    height: auto;
    font-size: 1.2em;
  }
`;

const TopicIcon = styled.div`
  background-image: url(${props => props.topic_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 30px;
  width: auto;
  margin-bottom: 10px;
`;

const TopicIconP = styled.p`
  margin-left: 40px;
  margin-bottom: 0;
  margin-top: 0;
`;

const AuthorIcon = styled.div`
  background-image: url(${props => props.author_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 30px;
  width: auto;
  margin-bottom: 10px;
`;

const AuthorIconP = styled.p`
  margin-left: 40px;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 0.8em;
`;

const DateP = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 0.8em;
`;

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
