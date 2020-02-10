import React, { Component } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import ArticleDetail from "./ArticleDetail";
// import { ArticlesContext } from "../contexts/ArticlesContext";
import { Router, Link } from "@reach/router";
import * as api from "../utils/api";

class ArticlesList extends Component {
  state = {
    articles: []
  };

  componentDidMount = () => {
    // Get all available articles ignoring default limit
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchArticles(this.props);
    }
  };

  fetchArticles = () => {
    api.getArticles(this.props).then(articles => {
      this.setState({ articles });
    });
  };

  render() {
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

    return (
      <MainStyled>
        {console.log(this.props, "<<<<<")}
        <MainListH1>Articles </MainListH1>

        <form>
          <label>
            Sort-by:
            <select>
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
