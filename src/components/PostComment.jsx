import React, { Component } from "react";
import styled from "styled-components";

class PostComment extends Component {
  state = {
    currentUser: this.props.username,
    userInput: ""
  };

  handleChange = event => {
    const userInput = event.target.value;
    this.setState({ userInput }, () => {
      console.log(this.state);
    });
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
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* INPUT TO FILL PAGE */}
            Comment body: <input onChange={this.handleChange} />
          </label>
          <button>Post comment</button>
        </form>
      </section>
    );
  }
}

export default PostComment;
