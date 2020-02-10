import React, { Component } from "react";
import * as api from "../utils/api";
import { Links, Router } from "@reach/router";
import styled from "styled-components";
import TopicCard from "../components/TopicCard";
import ArticlesList from "../components/ArticlesList";
import { ArticlesContext } from "../contexts/ArticlesContext";

class TopicsList extends Component {
  state = {
    topics: [{ slug: "", description: "" }]
  };

  componentDidMount() {
    api.getAllTopics().then(topics => {
      this.setState({ topics }, () => {
        console.log(this.state, "FROM TOPICS");
      });
    });
  }

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

    const { topics } = this.state;

    return (
      <MainStyled>
        <MainListH1>Topics List</MainListH1>
        {topics.map(topic => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </MainStyled>
    );
  }
}

export default TopicsList;
