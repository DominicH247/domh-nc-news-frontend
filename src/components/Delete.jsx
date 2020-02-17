import React, { Component } from "react";
import * as api from "../utils/api.js";
import { DeleteButton, CustomErrorP } from "../styles/DeleteStyles";

class Delete extends Component {
  state = {
    error: { status: "", msg: "", active: false }
  };

  handleDeleteClick = ({ target: { name } }) => {
    if (name === "comment") {
      api
        .deleteComment(this.props.comment_id)
        .then(() => {
          this.props.fetchCommentsByArticleId();
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
    }

    if (name === "article") {
      api
        .deleteArticleById(this.props.article_id)
        .then(() => {
          this.props.fetchArticlesTopicsUsers();
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
    }
  };

  render() {
    return (
      <div>
        <DeleteButton onClick={this.handleDeleteClick} name={this.props.type}>
          Delete {this.props.type}
        </DeleteButton>
        {this.state.error.active && (
          <CustomErrorP>
            Sorry there was an issue with deleting your {this.props.type}.
            Please try again later
          </CustomErrorP>
        )}
      </div>
    );
  }
}

export default Delete;
