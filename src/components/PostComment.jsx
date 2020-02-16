import React, { Component } from "react";
import {
  PostCommentForm,
  PostCommentSection,
  CommentInput,
  CommentFormLabel,
  CommentFormButton
} from "../styles/PostCommentStyles";

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
