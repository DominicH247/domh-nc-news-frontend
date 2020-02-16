import styled from "styled-components";

export const TopicCardDiv = styled.div`
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
  box-shadow: 0 0 35px ${props => props.shadow_color};
`;

export const TopicP = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const TopicIconP = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 60px;
`;

export const TopicIcon = styled.div`
  background-image: url(${props => props.topic_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 50px;
  width: auto;
`;
