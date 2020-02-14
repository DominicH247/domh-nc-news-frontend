import React, { Component } from "react";
import styled from "styled-components";

const PostCommentForm = styled.form`
  align-items: center;
`;

const PostCommentSection = styled.section`
  /* MOBILE */
  text-align: center;
  background-color: #376b7b;
  padding: 10px 0px 10px 0px;
  border: solid #376b7b;
  border-radius: 10px;
`;

const CommentInput = styled.textarea`
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

  &:focus {
    height: 500px;
    width: 90%;
    padding-bottom: 0;
    padding-left: 10px;
    line-height: 1em;
  }
`;

const CommentFormLabel = styled.label`
  font-size: 1em;
`;

const CommentFormButton = styled.button`
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

class PostComment extends Component {
  state = {
    currentUser: this.props.username,
    userInput: ""
  };

  handleChange = event => {
    const userInput = event.target.value;
    this.setState({ userInput });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.insertComment(this.state.currentUser, this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <PostCommentSection>
        {this.props.isLoggedIn ? (
          <PostCommentForm onSubmit={this.handleSubmit}>
            <CommentFormLabel>
              {/* INPUT TO FILL PAGE */}
              Comment:
              <CommentInput
                onChange={this.handleChange}
                value={this.state.userInput}
                placeholder="Your comment"
                required={true}
              />
            </CommentFormLabel>
            <CommentFormButton>Post comment</CommentFormButton>
          </PostCommentForm>
        ) : (
          <div>Please sign in to comment</div>
        )}
      </PostCommentSection>
    );
  }
}

export default PostComment;
