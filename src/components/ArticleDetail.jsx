import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import Voter from "./Voter";

class ArticleDetail extends Component {
  state = {
    article: {},
    comments: []
  };

  componentDidMount = () => {
    this.fetchArticleById();
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

  render() {
    const ArticleDetailStyled = styled.section`
      /* MOBILE */
      width: 100%;
      background-color: #376b7b;
      padding-left: 30px;
      padding-right: 30px;
      color: white;
    `;

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
      <>
        <ArticleDetailStyled>
          <p>/t {topic}</p>
          <p>Posted by /u {author}</p>
          <p>Created at {created_at}</p>
          <p>{body}</p>
          <Voter votes={votes} id={article_id} type={"articles"} />
          <p>Comments {comment_count}</p>
        </ArticleDetailStyled>
        <section>
          COMMENTS | SORT-BY | ORDER | ADD COMMENT
          {this.state.comments.map(comment => {
            return (
              <section key={comment.comment_id}>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
                <Voter
                  votes={comment.votes}
                  id={comment.comment_id}
                  type={"comments"}
                />
                <p>{comment.created_at}</p>
              </section>
            );
          })}
        </section>
      </>
    );
  }
}

export default ArticleDetail;
