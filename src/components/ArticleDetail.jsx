import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import Voter from "./Voter";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { UserLogInContext } from "../contexts/UserLogInContext";
import CustomErrorDisplay from "./CustomErrorDisplay";

// COMPONENT STYLING

const ArticleDetailStyled = styled.section`
  @media only screen and (min-width: 601px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 80%;
    width: 80vw;
  }

  /* MOBILE */
  background-color: #376b7b;
  padding: 10px 30px;
  color: white;
`;

const CommentsSection = styled.section`
  @media only screen and (min-width: 601px) {
    display: flex;
    flex-direction: column;
    margin-left: 80%;
    width: 80vw;
  }
  /* MOBILE */
  color: white;
  padding-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const CommentErrorP = styled.section`
  text-align: center;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: rgba(184, 116, 37, 0.8);
`;

class ArticleDetail extends Component {
  state = {
    article: {},
    comments: [],
    error: {
      status: "",
      msg: "",
      active: false
    }
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

    Promise.all([articleByIdProm, commentByArticleIdProm])
      .then(([article, comments]) => {
        this.setState({ article, comments });
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
    return (
      <UserLogInContext.Consumer>
        {context => {
          const { username, isLoggedIn } = context;

          return (
            <>
              <ArticleDetailStyled>
                <p>t/ {topic}</p>
                <p>Posted by u/ {author}</p>
                <p>Created at {created_at}</p>
                <p>{body}</p>

                <Voter
                  votes={votes}
                  id={article_id}
                  type={"articles"}
                  comment_count={comment_count}
                />
              </ArticleDetailStyled>

              <CommentsSection>
                {/* COMMENTS | SORT-BY | ORDER | ADD COMMENT Comments{" "} */}

                <PostComment
                  article_id={article_id}
                  insertComment={this.insertComment}
                  username={username}
                  isLoggedIn={isLoggedIn}
                />
                {this.state.error.active && (
                  <CommentErrorP>
                    Sorry there was an issue with posting your comment. Please
                    try again later.
                  </CommentErrorP>
                )}
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
                    />
                  );
                })}
              </CommentsSection>
            </>
          );
        }}
      </UserLogInContext.Consumer>
    );
  }
}

export default ArticleDetail;
