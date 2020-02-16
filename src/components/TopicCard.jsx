import React from "react";
import { Link } from "@reach/router";
import {
  TopicCardDiv,
  TopicP,
  TopicIconP,
  TopicIcon
} from "../styles/TopicCardStyles";

const TopicCard = ({ slug, description, topic_icon, path_slug }) => {
  return (
    <Link to={`/topics/${slug}/articles`}>
      <TopicCardDiv shadow_color={slug === path_slug ? "white" : "transparent"}>
        <TopicIcon topic_icon={topic_icon}>
          <TopicIconP>t/ {slug}</TopicIconP>
        </TopicIcon>
        <TopicP>{description}</TopicP>
      </TopicCardDiv>
    </Link>
  );
};

export default TopicCard;
