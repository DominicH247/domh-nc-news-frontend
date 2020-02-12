import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import Voter from "./Voter";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { UserLogInContext } from "../contexts/UserLogInContext";

// COMPONENT STYLING
const ArticleDetailStyled = styled.section`
  /* MOBILE */
  background-color: #376b7b;
  padding: 10px 30px;
  color: white;
`;

const CommentsSection = styled.section`
  /* MOBILE */
  color: white;
  padding-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

class ArticleDetail extends Component {
  state = {
    article: {},
    comments: []
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

    Promise.all([articleByIdProm, commentByArticleIdProm]).then(
      ([article, comments]) => {
        this.setState({ article, comments });
      }
    );
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
      .catch(err => {
        if (err) {
          console.log(err.response.data);
        }
      });
  };

  render() {
    // destructure article details
    const {
      author,
      body,
      created_at,
      topic,
      votes,
      comment_count,
      article_id
    } = this.state.article;

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
                <Voter votes={votes} id={article_id} type={"articles"} />
              </ArticleDetailStyled>
              <CommentsSection>
                {/* COMMENTS | SORT-BY | ORDER | ADD COMMENT Comments{" "} */}
                <p>{comment_count}</p>
                <PostComment
                  article_id={article_id}
                  insertComment={this.insertComment}
                  username={username}
                  isLoggedIn={isLoggedIn}
                />
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
