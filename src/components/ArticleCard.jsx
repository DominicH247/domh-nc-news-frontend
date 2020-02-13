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
    line-height: 1.8em;
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
  }
`;

const ArticleCard = ({
  topic,
  title,
  author,
  created_at,
  article_id,
  comment_count,
  votes
}) => {
  const createdAt = new Date(created_at);

  const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth()}-${createdAt.getFullYear()}, ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;

  return (
    <ArticleCardDiv>
      t/ {topic} <br />
      Posted by u/ {author} <br />
      <Link to={`/articles/${article_id}`}>
        {title} <br />
      </Link>
      Date: {formattedDate}
      <Voter
        votes={votes}
        id={article_id}
        type={"articles"}
        comment_count={comment_count}
      />
      <br />
    </ArticleCardDiv>
  );
};

export default ArticleCard;
