import React, { Component } from "react";
import * as api from "../utils/api";
import Voter from "./Voter";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { UserLogInContext } from "../contexts/UserLogInContext";
import CustomErrorDisplay from "./CustomErrorDisplay";
import Loading from "./Loading";
import * as utils from "../utils/index";
import {
  ArticleDetailContainer,
  ArticleDetailStylingDiv,
  DetailBodyP,
  CommentContainerDiv,
  PostCommentContainerDiv,
  CommentCardContainerDiv,
  CommentErrorP,
  TopicIconP,
  TopicIcon,
  AuthorIcon,
  AuthorIconP,
  DateP,
  VoterContainerDiv
} from "../styles/ArticleDetailStyles";

class ArticleDetail extends Component {
  state = {
    article: {},
    comments: [],
    error: {
      status: "",
      msg: "",
      active: false
    },
    isLoading: true
  };

  componentDidMount = () => {
    this.fetchArticleById();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.comments.length !== this.state.comments.length) {
      this.fetchArticleById();
    }
  };

  fetchCommentsByArticleId = () => {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };

  fetchArticleById = () => {
    const articleByIdProm = api.getArticleById(this.props.article_id);
    const commentByArticleIdProm = api.getCommentsByArticleId(
      this.props.article_id
    );
    const getTopicsProm = api.getAllTopics();
    const getUsersProm = api.getAllUsers();

    Promise.all([
      articleByIdProm,
      commentByArticleIdProm,
      getTopicsProm,
      getUsersProm
    ])
      .then(([article, comments, topics, users]) => {
        const topicRefObj = utils.createRef(topics, "slug", "topic_icon");
        const userRefOb = utils.createRef(users, "username", "avatar_url");

        const formattedArticlesTopicIcon = utils.formatArticles(
          [article],
          topicRefObj,
          "topic_icon",
          "topic"
        );

        const formattedArticle = utils.formatArticles(
          formattedArticlesTopicIcon,
          userRefOb,
          "avatar_url",
          "author"
        );

        const formattedComments = utils.formatArticles(
          comments,
          userRefOb,
          "avatar_url",
          "author"
        );

        this.setState({
          article: formattedArticle[0],
          comments: formattedComments,
          isLoading: false
        });
      })
      .catch(({ response }) => {
        if (response) {
          this.setState(currentState => {
            return {
              error: {
                status: response.status,
                msg: response.data.msg,
                active: !currentState.error.active
              }
            };
          });
        }
      });
  };

  insertComment = (username, body) => {
    const article_id = this.state.article.article_id;
    api
      .postComment(article_id, username, body)
      .then(({ data: { comment } }) => {
        this.setState(currentState => {
          return { comments: [comment, ...currentState.comments] };
        });
      })
      .catch(({ response }) => {
        if (response) {
          this.setState(currentState => {
            return {
              error: {
                status: response.status,
                msg: response.data.msg,
                active: !currentState.error.active
              }
            };
          });
        }
      });
  };

  render() {
    const {
      author,
      body,
      created_at,
      topic,
      votes,
      comment_count,
      article_id
    } = this.state.article;

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

    const createdAt = new Date(created_at);

    const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth()}-${createdAt.getFullYear()}`;

    return (
      <UserLogInContext.Consumer>
        {context => {
          const { username, isLoggedIn } = context;

          return (
            <>
              <ArticleDetailContainer>
                <ArticleDetailStylingDiv>
                  <TopicIcon topic_icon={this.state.article.topic_icon}>
                    <TopicIconP>t/ {topic}</TopicIconP>
                  </TopicIcon>

                  <AuthorIcon author_icon={this.state.article.avatar_url}>
                    <AuthorIconP>Posted by u/ {author}</AuthorIconP>
                    <DateP>Created at {formattedDate}</DateP>
                  </AuthorIcon>

                  <DetailBodyP>{body}</DetailBodyP>

                  <VoterContainerDiv>
                    <Voter
                      votes={votes}
                      id={article_id}
                      type={"articles"}
                      comment_count={comment_count}
                    />
                  </VoterContainerDiv>
                </ArticleDetailStylingDiv>
              </ArticleDetailContainer>

              <CommentContainerDiv>
                <PostCommentContainerDiv>
                  <PostComment
                    article_id={article_id}
                    insertComment={this.insertComment}
                    username={username}
                    isLoggedIn={isLoggedIn}
                  />
                </PostCommentContainerDiv>
                {/* COMMENTS | SORT-BY | ORDER | ADD COMMENT Comments{" "} */}
                {this.state.error.active && (
                  <CommentErrorP>
                    Sorry there was an issue with posting your comment. Please
                    try again later.
                  </CommentErrorP>
                )}

                <CommentCardContainerDiv>
                  {this.state.comments.map(comment => {
                    return (
                      <CommentCard
                        key={comment.comment_id}
                        author={comment.author}
                        body={comment.body}
                        votes={comment.votes}
                        comment_id={comment.comment_id}
                        type={"comments"}
                        created_at={comment.created_at}
                        fetchCommentsByArticleId={this.fetchCommentsByArticleId}
                        isLoggedIn={isLoggedIn}
                        username={username}
                        author_icon={comment.avatar_url}
                      />
                    );
                  })}
                </CommentCardContainerDiv>
              </CommentContainerDiv>
            </>
          );
        }}
      </UserLogInContext.Consumer>
    );
  }
}

export default ArticleDetail;
