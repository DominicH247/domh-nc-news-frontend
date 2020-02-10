import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import TopicCard from "../components/TopicCard";

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

class TopicsList extends Component {
  state = {
    topics: [{ slug: "", description: "" }]
  };

  componentDidMount() {
    api.getAllTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
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
