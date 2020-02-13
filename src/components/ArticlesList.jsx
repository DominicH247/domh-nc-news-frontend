import React, { Component } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import * as utils from "../utils/index";
import TopicsList from "./TopicsList";
import { ThemeContext } from "../contexts/ThemeContext";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

// COMPONENT STYLING

const MainStyled = styled.main`
  @media only screen and (min-width: 601px) {
    /* DESKTOP */
    width: 100vw;
    display: grid;
    grid-template-columns: auto 30% 40% auto;
    grid-template-rows: 100px auto;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    /* MOBILE */
    width: 80%;
    margin: 0 auto;
    background-color: #407d90;
    height: 100%;
  }
`;

const MainListH1 = styled.h1`
  @media only screen and (min-width: 601px) {
    grid-column-start: 3;
    text-align: center;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    /* MOBILE */
    text-align: center;
    color: white;
  }
`;

// FORM STYLING
const SortByForm = styled.form`
  @media only screen and (min-width: 601px) {
    grid-column-start: 3;
    text-align: center;
    font-size: 1em;
  }

  /* MOBILE */
  color: white;
  margin-bottom: 10px;
`;

const SortByFormLabel = styled.label`
  /* MOBILE */
  margin-left: 0px;
`;

const SortByFormSelect = styled.select`
  @media only screen and (min-width: 600px) {
    /* DESKTOP */
    font-size: 1em;
  }

  margin-left: 10px;
  font-family: Spartan;
  border-color: #376b7b;
  border-radius: 5px;
  background-color: #376b7b;
  color: white;
`;

class ArticlesList extends Component {
  state = {
    articles: [],
    query: { sortBy: undefined, order: "asc" },
    isLoading: true,
    error: false
  };

  componentDidMount = () => {
    // Get all available articles ignoring default limit
    this.fetchArticlesTopicsUsers();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.slug !== this.props.slug) {
      this.fetchArticlesTopicsUsers(this.props);
    }
    if (
      prevState.query.sortBy !== this.state.query.sortBy ||
      prevState.query.order !== this.state.query.order
    ) {
      this.fetchArticlesTopicsUsers();
    }
  };

  fetchArticlesTopicsUsers = () => {
    const getArticlesProm = api.getArticles(this.props, this.state.query);
    const getTopicsProm = api.getAllTopics();
    const getUsersProm = api.getAllUsers();

    Promise.all([getArticlesProm, getTopicsProm, getUsersProm])
      .then(([articles, topics, users]) => {
        console.log(topics);
        const formattedArticles = utils.formatArticles(articles, topics, users);

        this.setState({ articles: formattedArticles, isLoading: false }, () => {
          console.log(this.state, "HERE");
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ query: { [id]: value } });
  };

  applySearchFilter = searchInput => {
    const matcherReg = new RegExp(`${searchInput}`, "gi");

    const filteredArticles = this.state.articles.filter(article => {
      return matcherReg.test(article.title);
    });

    this.setState({ articles: filteredArticles });
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { width } = context;
          if (this.state.isLoading) {
            return <Loading />;
          }

          return (
            <MainStyled>
              {width > 601 && <TopicsList />}

              <MainListH1>Articles </MainListH1>
              <SearchBar applySearchFilter={this.applySearchFilter} />
              <SortByForm>
                <SortByFormLabel>
                  Sort-by:
                  <SortByFormSelect
                    id="sortBy"
                    onChange={this.handleChange}
                    value={this.state.query.sortBy}
                  >
                    <option value="created_at">created at</option>
                    <option value="comment_count">comments</option>
                    <option value="votes">votes</option>
                  </SortByFormSelect>
                </SortByFormLabel>
              </SortByForm>

              {this.state.articles.map(article => {
                return <ArticleCard key={article.article_id} {...article} />;
              })}
            </MainStyled>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ArticlesList;
