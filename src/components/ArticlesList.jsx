import React, { Component } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import * as utils from "../utils/index";
import TopicsList from "./TopicsList";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserLogInContext } from "../contexts/UserLogInContext";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import CustomErrorDisplay from "./CustomErrorDisplay";
import PostArticle from "./PostArticle";

// COMPONENT STYLING

const MainStyled = styled.main`
  @media only screen and (min-width: 601px) {
    /* DESKTOP */
    width: 99vw;
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
  margin-left: 10px;
  font-family: Spartan;
  border-color: #376b7b;
  border-radius: 5px;
  background-color: #376b7b;
  color: white;
`;

const NoArticlesP = styled.p`
  color: white;
  text-align: center;
  grid-area: 5/3/6/4;
`;

const RefreshListButton = styled.button`
  grid-area: 6/3/7/4;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border: solid 1px #376b7b;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
`;

const PostArticleContainer = styled.div`
  grid-column: 3/4;
`;

const PostArticleButton = styled.button`
  grid-area: 4/3/5/4;
  text-align: center;
  border: solid 1px #376b7b;
  border-radius: 5px;
  padding-top: 5px;
  margin-bottom: 10px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;

class ArticlesList extends Component {
  state = {
    articles: [],
    topics: [],
    query: { sortBy: undefined, order: "asc" },
    error: {
      status: "",
      msg: "",
      active: false
    },
    isLoading: true,
    postArticle: false
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

    if (prevState.articles.length !== this.state.articles.length) {
      this.fetchArticlesTopicsUsers();
    }
  };

  fetchArticlesTopicsUsers = () => {
    const getArticlesProm = api.getArticles(this.props, this.state.query);
    const getTopicsProm = api.getAllTopics();
    const getUsersProm = api.getAllUsers();

    Promise.all([getArticlesProm, getTopicsProm, getUsersProm])
      .then(([articles, topics, users]) => {
        const topicRefObj = utils.createRef(topics, "slug", "topic_icon");
        const userRefObj = utils.createRef(users, "username", "avatar_url");

        const formattedArticleTopic = utils.formatArticles(
          articles,
          topicRefObj,
          "topic_icon",
          "topic"
        );

        const formattedArticles = utils.formatArticles(
          formattedArticleTopic,
          userRefObj,
          "avatar_url",
          "author"
        );

        this.setState({
          articles: formattedArticles,
          topics,
          isLoading: false
        });
      })
      .catch(({ response }) => {
        if (response) {
          this.setState({
            error: {
              status: response.status,
              msg: response.data.msg,
              active: true
            }
          });
        }
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

  handlePostArticleClick = () => {
    this.setState(currentState => {
      return { postArticle: !currentState.postArticle };
    });
  };

  handlePostNewArticle = ({ username, topic, title, body }) => {
    api
      .insertNewArticle(username, topic, title, body)
      .then(({ data: { article } }) => {
        this.setState(currentState => {
          return {
            articles: [article, ...currentState.articles],
            postArticle: false
          };
        });
      });
  };

  render() {
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

    return (
      <UserLogInContext.Consumer>
        {userContext => {
          const { username, isLoggedIn } = userContext;
          return (
            //THEME START
            <ThemeContext.Consumer>
              {context => {
                const { width } = context;
                if (this.state.isLoading) {
                  return <Loading />;
                }

                return (
                  <MainStyled>
                    {width > 601 && <TopicsList slug={this.props.slug} />}
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

                    <PostArticleButton onClick={this.handlePostArticleClick}>
                      Create new article
                    </PostArticleButton>

                    {this.state.postArticle ? (
                      <PostArticleContainer>
                        <PostArticle
                          username={username}
                          isLoggedIn={isLoggedIn}
                          handlePostNewArticle={this.handlePostNewArticle}
                          topics={this.state.topics}
                        />
                      </PostArticleContainer>
                    ) : this.state.articles.length !== 0 ? (
                      this.state.articles.map(article => {
                        return (
                          <ArticleCard key={article.article_id} {...article} />
                        );
                      })
                    ) : (
                      <>
                        <NoArticlesP>No articles found</NoArticlesP>
                        <RefreshListButton onClick={this.componentDidMount}>
                          refresh
                        </RefreshListButton>
                      </>
                    )}
                  </MainStyled>
                );
              }}
            </ThemeContext.Consumer>
            // THEME END
          );
        }}
      </UserLogInContext.Consumer>
    );
  }
}

export default ArticlesList;
