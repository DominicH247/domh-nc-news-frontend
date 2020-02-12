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
  margin-top: 10px;
  margin-bottom: 5px;
`;

const TopicIconP = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 60px;
`;

const TopicIcon = styled.div`
  background-image: url(${props => props.topic_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 50px;
  width: auto;
`;

const TopicCard = ({ slug, description, topic_icon }) => {
  return (
    <Link to={`/topics/${slug}/articles`}>
      <TopicCardDiv>
        <TopicIcon topic_icon={topic_icon}>
          <TopicIconP>t/ {slug}</TopicIconP>
        </TopicIcon>
        <TopicP>{description}</TopicP>
      </TopicCardDiv>
    </Link>
  );
};

export default TopicCard;
