import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import TopicCard from "../components/TopicCard";
import { ThemeContext } from "../contexts/ThemeContext";
import Loading from "./Loading";
import CustomErrorDisplay from "./CustomErrorDisplay";
import {
  MainStyledDesktop,
  MainStyled,
  MainListH1,
  AllArticlesButton
} from "../styles/TopicListStyles";

class TopicsList extends Component {
  state = {
    topics: [],
    error: {
      status: "",
      msg: "",
      active: false
    },
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

    setTimeout(() => {
      if (this.state.isLoading === true) {
        this.setState({
          error: {
            status: "Network",
            msg: "Please check your connection",
            active: true
          }
        });
      }
    }, 20000);

    if (this.state.error.active) {
      return <CustomErrorDisplay {...this.state.error} />;
    }

    if (this.state.isLoading) {
      return <Loading />;
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

        {width > 601 && (
          <Link to="/">
            <AllArticlesButton>View All Topics</AllArticlesButton>
          </Link>
        )}

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
