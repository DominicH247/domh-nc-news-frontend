import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import { AppStyles } from "./styles/AppStyles.jsx";
import Title from "./components/Title.jsx";
import NavBar from "./components/NavBar.jsx";
import ArticlesList from "./components/ArticlesList";
import TopicsList from "./components/TopicsList";
import ArticleDetail from "./components/ArticleDetail";
import ErrDisplayer from "./components/ErrDisplayer";
import UserLogInContextProvider from "./contexts/UserLogInContext";
import ThemeContextProvider from "./contexts/ThemeContext";

const App = props => {
  return (
    <UserLogInContextProvider>
      <ThemeContextProvider>
        <AppStyles>
          <Title />
          <NavBar />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="/topics/:slug/articles" />
            <TopicsList path="/topics" />
            <ArticleDetail path="/articles/:article_id" />
            <ErrDisplayer default />
          </Router>
        </AppStyles>
      </ThemeContextProvider>
    </UserLogInContextProvider>
  );
};

export default App;
