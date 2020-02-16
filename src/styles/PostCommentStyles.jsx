import styled from "styled-components";

export const PostCommentForm = styled.form`
  align-items: center;
`;

export const PostCommentSection = styled.section`
  /* MOBILE */
  text-align: center;
  background-color: #376b7b;
  padding: 10px 0px 10px 0px;
  border: solid #376b7b;
  border-radius: 10px;
`;

export const CommentInput = styled.textarea`
  /* MOBILE */
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 5px;
  height: 2em;
  border-color: black;
  background-color: #ede9e9;
  font-family: Spartan;
  vertical-align: middle;
  resize: none;
  width: 30%;

  &:focus {
    height: 500px;
    width: 90%;
    padding-bottom: 0;
    padding-left: 10px;
    line-height: 1em;
  }
`;

export const CommentFormLabel = styled.label`
  font-size: 1em;
`;

export const CommentFormButton = styled.button`
  border: solid 1px #407d90;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #407d90;
  font-family: Spartan;
  text-align: center;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;
