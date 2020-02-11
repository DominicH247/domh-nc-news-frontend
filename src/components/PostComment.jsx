import React, { Component } from "react";
import styled from "styled-components";

class PostComment extends Component {
  state = {
    userInput: ""
  };

  handleChange = event => {};

  render() {
    return (
      <Main>
        <header>ARTICLE TITLE</header>
        <form>
          <label>
            {/* INPUT TO FILL PAGE */}
            Comment body: <input onChange={this.handleChange} />
          </label>
        </form>
      </Main>
    );
  }
}

export default PostComment;
