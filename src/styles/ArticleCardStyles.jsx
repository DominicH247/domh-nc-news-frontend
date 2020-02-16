import styled from "styled-components";

// COMPONENT STYLING
export const ArticleCardDiv = styled.div`
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

export const TopicIcon = styled.div`
  background-image: url(${props => props.topic_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 30px;
  width: auto;
  margin-bottom: 10px;
`;

export const TopicIconP = styled.p`
  margin-left: 40px;
  margin-bottom: 0;
  margin-top: 0;
`;

export const AuthorIcon = styled.div`
  background-image: url(${props => props.author_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 30px;
  width: auto;
  margin-bottom: 10px;
`;

export const AuthorIconP = styled.p`
  margin-left: 40px;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 0.8em;
`;

export const DateP = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 0.8em;
`;
