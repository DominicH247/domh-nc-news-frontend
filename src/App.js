import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { AppStyles } from "./styles/AppStyles.jsx";
import Title from "./components/Title.jsx";
import NavBar from "./components/NavBar.jsx";
import ArticlesList from "./components/ArticlesList";
import ArticlesContextProvider from "./contexts/ArticlesContext";
import TopicsList from "./components/TopicsList";

class App extends Component {
  state = {};
  render() {
    return (
      <AppStyles>
        <Title />
        <NavBar />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/:article_id" />
          <ArticlesList path="/topics/:slug/articles" />
          <TopicsList path="/topics" />
        </Router>
      </AppStyles>
    );
  }
}

export default App;
