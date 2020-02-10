import React, { Component } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
// import { ArticlesContext } from "../contexts/ArticlesContext";
// import { Router } from "@reach/router";
import * as api from "../utils/api";

class ArticlesList extends Component {
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
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </MainStyled>
    );
  }
}

export default ArticlesList;
