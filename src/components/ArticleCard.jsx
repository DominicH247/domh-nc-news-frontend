import React from "react";
// import { ArticleDetailContext } from "../contexts/ArticleDetailContext";
import { Link } from "@reach/router";
import styled from "styled-components";
import Voter from "./Voter";

// COMPONENT STYLING
const ArticleCardDiv = styled.div`
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
  return (
    <ArticleCardDiv>
      t/ {topic} <br />
      Posted by u/ {author} <br />
      <Link to={`/articles/${article_id}`}>
        {title} <br />
      </Link>
      At {created_at}
      <br />
      Comment count {comment_count}
      <br />
      <Voter votes={votes} id={article_id} type={"articles"} />
      <br />
    </ArticleCardDiv>
  );
};

export default ArticleCard;
