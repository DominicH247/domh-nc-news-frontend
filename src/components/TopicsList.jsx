import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import styled from "styled-components";
import TopicCard from "../components/TopicCard";
import { ThemeContext } from "../contexts/ThemeContext";
import Loading from "./Loading";

const MainStyledDesktop = styled.main`
  width: 80vw;
  margin-left: 80%;
`;

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
    margin-bottom: 77px;
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

  static contextType = ThemeContext;

  componentDidMount() {
    api.getAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { width } = this.context;
    const { topics } = this.state;

    if (this.state.isLoading) {
      return <Loading />; // TO MAKE COMPONENT
    }

    return this.props.path === "/topics" && width > 601 ? (
      <MainStyledDesktop>
        <MainListH1>Topics</MainListH1>
        {topics.map(topic => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </MainStyledDesktop>
    ) : (
      <MainStyled>
        <MainListH1>Topics</MainListH1>
        <Link to="/">
          <button>All</button>
        </Link>

        {topics.map(topic => {
          return (
            <TopicCard
              key={topic.slug}
              {...topic}
              path_slug={this.props.slug}
            />
          );
        })}
      </MainStyled>
    );
  }
}

export default TopicsList;
