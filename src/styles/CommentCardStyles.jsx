import styled from "styled-components";

export const CommentCardSection = styled.section`
  /* border: solid black; */
  margin-bottom: 13px;
  box-shadow: 0px 1px 1px #376b7b;
`;

export const AuthorIcon = styled.div`
  background-image: url(${props => props.author_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 35px;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AuthorIconP = styled.p`
  margin-left: 60px;
  margin-bottom: 0;
  margin-top: 15px;
  font-size: 0.8em;
  padding-top: 12px;
`;
