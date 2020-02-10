import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const TopicCard = ({ slug, description }) => {
  const TopicCardDiv = styled.div`
    border: solid 2px red;
    margin-bottom: 13px;
  `;

  return (
    <Link to={`/topics/${slug}/articles`}>
      <TopicCardDiv>
        <p>{slug}</p>
        <p>{description}</p>
      </TopicCardDiv>
    </Link>
  );
};

export default TopicCard;
