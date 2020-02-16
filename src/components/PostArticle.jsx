import React, { Component } from "react";
import styled from "styled-components";

const PostArticleForm = styled.form`
  margin-top: 10px;
  color: white;
`;

const PostArticleTextArea = styled.textarea`
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

const PostArticleTitle = styled.input`
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

const PostArticleButton = styled.button`
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

const PostArticlePSignIn = styled.p`
  color: white;
`;

const SelectTopic = styled.select`
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: Spartan;
  border-color: #376b7b;
  border-radius: 5px;
  background-color: #376b7b;
  color: white;
`;

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    username: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, username: this.props.username }, () =>
      console.log(this.state)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handlePostNewArticle({ ...this.state });
    this.setState({ title: "", body: "", topic: "", username: "" });
  };

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <PostArticlePSignIn>
          Please sign in to post a new article
        </PostArticlePSignIn>
      );
    }

    return (
      <PostArticleForm onSubmit={this.handleSubmit}>
        <label>
          Title:
          <PostArticleTitle
            type="text"
            name="title"
            placeholder="Article Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </label>
        <br />
        <br />
        <label>
          Topic:
          <SelectTopic
            name={"topic"}
            onChange={this.handleChange}
            required={true}
          >
            <option value="">---</option>
            {this.props.topics.map(topic => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </SelectTopic>
        </label>
        <br />
        <label>
          New Article:{" "}
          <PostArticleTextArea
            placeholder="Post a new article"
            onChange={this.handleChange}
            required={true}
            name="body"
            value={this.state.body}
          />
        </label>
        <PostArticleButton>Submit</PostArticleButton>
      </PostArticleForm>
    );
  }
}

export default PostArticle;
