import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { AppStyles } from "./styles/AppStyles.jsx";
import Title from "./components/Title.jsx";
import NavBar from "./components/NavBar.jsx";
import ArticlesList from "./components/ArticlesList";
// import ArticlesContextProvider from "./contexts/ArticlesContext";
import TopicsList from "./components/TopicsList";
import ArticleDetail from "./components/ArticleDetail";

class App extends Component {
  state = {};
  render() {
    return (
      <AppStyles>
        <Title />
        <NavBar />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:slug/articles" />
          <TopicsList path="/topics" />
          <ArticleDetail path="/articles/:article_id" />
        </Router>
      </AppStyles>
    );
  }
}

export default App;
