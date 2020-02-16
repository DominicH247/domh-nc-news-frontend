import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import { createRef, formatArticles } from "../utils/index";
import TopicsList from "./TopicsList";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserLogInContext } from "../contexts/UserLogInContext";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import CustomErrorDisplay from "./CustomErrorDisplay";
import PostArticle from "./PostArticle";
import {
  MainStyled,
  MainListH1,
  SortByForm,
  SortByFormLabel,
  SortByFormSelect,
  NoArticlesP,
  PostArticleContainer,
  PostArticleButton,
  ResetSearchButton
} from "../styles/ArticleListStyles";

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
    filtering: false,
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

    if (
      prevState.articles.length !== this.state.articles.length &&
      this.state.filtering === false
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
        const topicRefObj = createRef(topics, "slug", "topic_icon");
        const userRefObj = createRef(users, "username", "avatar_url");

        const formattedArticleTopic = formatArticles(
          articles,
          topicRefObj,
          "topic_icon",
          "topic"
        );

        const formattedArticles = formatArticles(
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

    this.setState({ articles: filteredArticles, filtering: true });
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

  handleSearchResetClick = () => {
    this.fetchArticlesTopicsUsers();
    this.setState({ filtering: false });
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

                    {this.state.filtering && (
                      <ResetSearchButton onClick={this.handleSearchResetClick}>
                        Refresh article list
                      </ResetSearchButton>
                    )}

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
