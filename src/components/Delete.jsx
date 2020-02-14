import React, { Component } from "react";
import * as api from "../utils/api.js";
import styled from "styled-components";

const DeleteButton = styled.button`
  border: solid 2px #407d90;
  border-radius: 5px;
  color: white;
  background-color: #376b7b;
  padding-top: 5px;
  font-family: Spartan;
  text-align: center;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;

const CustomErrorP = styled.p`
  text-align: center;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: rgba(184, 116, 37, 0.8);
`;

class Delete extends Component {
  state = {
    error: { status: "", msg: "", active: false }
  };

  handleDeleteClick = () => {
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
  };

  render() {
    return (
      <div>
        <DeleteButton onClick={this.handleDeleteClick}>
          Delete Comment
        </DeleteButton>
        {this.state.error.active && (
          <CustomErrorP>
            Sorry there was an issue with deleting your comment. Please try
            again later
          </CustomErrorP>
        )}
      </div>
    );
  }
}

export default Delete;
