import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const TopicCardDiv = styled.div`
  /* MOBILE */
  border: solid 2px red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #376b7b;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 13px;
  border: solid;
  border-width: 1px;
  border-color: #376b7b;
  border-radius: 5px;
  height: auto;
`;

const TopicP = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const TopicCard = ({ slug, description }) => {
  return (
    <Link to={`/topics/${slug}/articles`}>
      <TopicCardDiv>
        <TopicP>t/ {slug}</TopicP>
        <TopicP>{description}</TopicP>
      </TopicCardDiv>
    </Link>
  );
};

export default TopicCard;
