import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import TopicCard from "../components/TopicCard";

const MainStyled = styled.main`
  @media only screen and (min-width: 601px) {
    grid-column-start: 2;
  }
  /* MOBILE */
  width: 80%;
  margin: 0 auto;
  background-color: #407d90;
`;

const MainListH1 = styled.h1`
  @media only screen and (min-width: 601px) {
    margin-bottom: 70px;
    grid-column-start: 3;
  }

  /* MOBILE */
  text-align: center;
  color: white;
`;

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    api.getAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics } = this.state;

    if (this.state.isLoading) {
      return <p>LOADING</p>; // TO MAKE COMPONENT
    }
    return (
      <MainStyled>
        <MainListH1>Topics</MainListH1>
        {topics.map(topic => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </MainStyled>
    );
  }
}

export default TopicsList;
