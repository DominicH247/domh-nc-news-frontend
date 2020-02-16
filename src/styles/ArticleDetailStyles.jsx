import styled from "styled-components";

export const ArticleDetailContainer = styled.section`
  @media only screen and (min-width: 651px) {
    display: grid;
    grid-template-columns: auto 75% auto;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    width: 100vw;
  }

  /* MOBILE */
  padding: 15px 15px;
  color: white;
  width: 100vw;
`;

export const ArticleDetailStylingDiv = styled.div`
  grid-column-start: 2;
  background-color: #376b7b;
  border: solid #376b7b;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const DetailBodyP = styled.p`
  grid-area: 3/2/4/3;
  margin-top: 0;
  margin-bottom: 0;
`;

export const CommentContainerDiv = styled.section`
  @media only screen and (min-width: 651px) {
    display: grid;
    grid-template-columns: auto 0.75fr auto;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    width: 100vw;
    margin: 0;
  }
  color: white;
  margin: 0;
  width: 100vw;
`;

export const PostCommentContainerDiv = styled.div`
  grid-area: 1/2/2/3;
  margin-left: 13px;
  margin-right: 13px;
`;

export const CommentCardContainerDiv = styled.div`
  grid-area: 2/2/3/3;
  color: white;
  margin-left: 25px;
  margin-right: 25px;
`;

export const CommentErrorP = styled.section`
  text-align: center;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: rgba(184, 116, 37, 0.8);
`;

export const TopicIconP = styled.p`
  margin-left: 75px;
  margin-bottom: 0;
  margin-top: 25px;
  font-size: 1.2em;
`;

export const TopicIcon = styled.div`
  background-image: url(${props => props.topic_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 60px;
  width: auto;
  margin-bottom: 10px;
  grid-area: 1/2/2/3;
`;

export const AuthorIcon = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  justify-content: flex-start;
  background-image: url(${props => props.author_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 35px;
  width: auto;
  margin-bottom: 10px;
`;

export const AuthorIconP = styled.p`
  margin-left: 60px;
  margin-bottom: 0;
  margin-top: 10px;
  font-size: 0.8em;
`;

export const DateP = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.8em;
`;

export const VoterContainerDiv = styled.div`
  grid-area: 4/2/5/3;
`;
