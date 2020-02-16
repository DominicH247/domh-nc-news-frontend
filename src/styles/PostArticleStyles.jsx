import styled from "styled-components";

export const PostArticleForm = styled.form`
  margin-top: 10px;
  color: white;
`;

export const PostArticleTextArea = styled.textarea`
  /* MOBILE */
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 5px;
  height: 2em;
  border-color: black;
  background-color: #ede9e9;
  font-family: Spartan;
  vertical-align: middle;
  resize: none;
  width: 100%;
  height: 40vh;
`;

export const PostArticleTitle = styled.input`
  padding-top: 5px;
  padding-left: 10px;
  margin-left: 10px;
  border-radius: 5px;
  width: 60%;
  height: 2em;
  border-color: black;
  background-color: #ede9e9;
  font-family: Spartan;
`;

export const PostArticleButton = styled.button`
  margin-top: 10px;
  border: solid 1px #376b7b;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
  text-align: center;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;

export const PostArticlePSignIn = styled.p`
  color: white;
`;

export const SelectTopic = styled.select`
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: Spartan;
  border-color: #376b7b;
  border-radius: 5px;
  background-color: #376b7b;
  color: white;
`;
