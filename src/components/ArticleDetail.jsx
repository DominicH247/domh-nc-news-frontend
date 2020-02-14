import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import Voter from "./Voter";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { UserLogInContext } from "../contexts/UserLogInContext";
import CustomErrorDisplay from "./CustomErrorDisplay";
import Loading from "./Loading";
import * as utils from "../utils/index";

// COMPONENT STYLING

const ArticleDetailContainer = styled.section`
  @media only screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: auto 50% auto;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    width: 100vw;
  }
  /* MOBILE */
  padding: 10px 30px;
  color: white;
`;

const ArticleDetailStylingDiv = styled.div`
  grid-column-start: 2;
  background-color: #376b7b;
  border: solid #376b7b;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const DetailBodyP = styled.p`
  grid-area: 3/2/4/3;
  margin-top: 0;
  margin-bottom: 0;
`;

const CommentContainerDiv = styled.section`
  @media only screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: auto 50% auto;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    width: 100vw;

    margin: 0;
  }
  color: white;
  padding-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const PostCommentContainerDiv = styled.div`
  grid-area: 1/2/2/3;
  margin-left: 13px;
  margin-right: 13px;
`;

const CommentCardContainerDiv = styled.div`
  grid-area: 2/2/3/3;
  color: white;
  margin-left: 25px;
  margin-right: 25px;
`;

const CommentErrorP = styled.section`
  text-align: center;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: rgba(184, 116, 37, 0.8);
`;

const TopicIconP = styled.p`
  margin-left: 75px;
  margin-bottom: 0;
  margin-top: 25px;
  font-size: 1.2em;
`;

const TopicIcon = styled.div`
  background-image: url(${props => props.topic_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 60px;
  width: auto;
  margin-bottom: 10px;
  grid-area: 1/2/2/3;
`;

const AuthorIcon = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  justify-content: flex-start;
  background-image: url(${props => props.author_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  height: 35px;
  width: auto;
  margin-bottom: 10px;
`;

const AuthorIconP = styled.p`
  margin-left: 60px;
  margin-bottom: 0;
  margin-top: 10px;
  font-size: 0.8em;
`;

const DateP = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.8em;
`;

const VoterContainerDiv = styled.div`
  grid-area: 4/2/5/3;
`;

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
                ...currentState.error,
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
                ...currentState.error,
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

    if (this.state.error.active && this.state.error.status === 404) {
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
