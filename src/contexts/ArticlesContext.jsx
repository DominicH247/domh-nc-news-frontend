import React, { Component, createContext } from "react";
import axios from "axios";

export const ArticlesContext = createContext();

class ArticlesContextProvider extends Component {
  state = {
    articles: [
      {
        author: "",
        title: "",
        article_id: "",
        topic: "",
        created_at: "",
        votes: 0,
        comment_count: 0,
        total_count: 0
      }
    ]
  };

  componentDidMount = () => {
    // Get all available articles ignoring default limit
    axios
      .get("https://domh-be-nc-news.herokuapp.com/api/articles?limit=100")
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };

  render() {
    return (
      <ArticlesContext.Provider
        value={{ ...this.state, handleClick: this.handleClick }}
      >
        {this.props.children}
      </ArticlesContext.Provider>
    );
  }
}

export default ArticlesContextProvider;
