import React from "react";
// import { ArticleDetailContext } from "../contexts/ArticleDetailContext";
import styled from "styled-components";

const ArticleCard = ({ topic, title, author, created_at }) => {
  const ArticleCardDiv = styled.div`
    /* MOBILE */
    background-color: #376b7b;
    color: white;
    margin-bottom: 13px;
    border: solid;
    border-width: 1px;
    border-color: #376b7b;
    border-radius: 5px;
    line-height: 1.8em;
  `;

  return (
    <ArticleCardDiv>
      t/ {topic} <br />
      Posted by /u {author} <br />
      {title} <br />
      At {created_at}
      <br />
    </ArticleCardDiv>
  );
};

export default ArticleCard;
