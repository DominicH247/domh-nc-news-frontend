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
        <ArticlesContextProvider>
          <Router>
            <ArticlesList path="/" />
            <TopicsList path="/topics" />
            <ArticlesList path="/topics/:slug" />
          </Router>
        </ArticlesContextProvider>
      </AppStyles>
    );
  }
}

export default App;
