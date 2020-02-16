import React, { Component } from "react";
import {
  PostArticleForm,
  PostArticleTextArea,
  PostArticleTitle,
  PostArticleButton,
  PostArticlePSignIn,
  SelectTopic
} from "../styles/PostArticleStyles";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    username: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, username: this.props.username });
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
