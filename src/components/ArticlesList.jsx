import React, { Component } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

import * as api from "../utils/api";

// COMPONENT STYLING
const MainStyled = styled.main`
  /* MOBILE */
  width: 80%;
  margin: 0 auto;
  background-color: #407d90;
  height: 100%;
`;

const MainListH1 = styled.h1`
  /* MOBILE */
  text-align: center;
  color: white;
`;

class ArticlesList extends Component {
  state = {
    articles: [],
    query: { sortBy: undefined, order: "asc" },
    isLoading: true
  };

  componentDidMount = () => {
    // Get all available articles ignoring default limit
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchArticles(this.props);
    }
    if (prevState.query !== this.state.query) {
      this.fetchArticles();
    }
  };

  fetchArticles = () => {
    api.getArticles(this.props, this.state.query).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ query: { [id]: value } });
  };

  render() {
    if (this.state.isLoading) {
      // TO ADD LOADING COMPONENT
      return <p>LOADING</p>;
    }
    return (
      <MainStyled>
        <MainListH1>Articles </MainListH1>

        <form>
          <label>
            Sort-by:
            <select
              id="sortBy"
              onChange={this.handleChange}
              value={this.state.query.sortBy}
            >
              <option value="created_at">created at</option>
              <option value="comment_count">comments</option>
              <option value="votes">votes</option>
            </select>
          </label>
        </form>

        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </MainStyled>
    );
  }
}

export default ArticlesList;
