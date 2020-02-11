import React, { Component } from "react";
import styled from "styled-components";

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
      <section>
        <header>ARTICLE TITLE</header>
        {this.props.isLoggedIn ? (
          <form onSubmit={this.handleSubmit}>
            <label>
              {/* INPUT TO FILL PAGE */}
              Comment body:{" "}
              <input
                onChange={this.handleChange}
                value={this.state.userInput}
              />
            </label>
            <button>Post comment</button>
          </form>
        ) : (
          <div>Please sign in to comment</div>
        )}
      </section>
    );
  }
}

export default PostComment;
