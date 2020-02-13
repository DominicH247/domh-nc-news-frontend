import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
import arrow from "/home/domh/projects/northcoders/frontend/review/domh-nc-news-frontend/src/images/up-clear-white.png";
import CommentIcon from "../images/comment-clear-white.png";

const VoterContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
`;

const UpVoteBtn = styled.button`
  background-image: url(${arrow});
  height: 20px;
  width: 20px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  color: transparent;
`;

const DownVoteBtn = styled.button`
  background-image: url(${arrow});
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  color: transparent;
`;

const Votes = styled.p`
  margin: 0px 10px;
`;

const CommentCounterContainer = styled.div`
  background-image: url(${CommentIcon});
  text-align: right;
  margin-top: 2px;
  margin-left: 20px;
  width: 50px;
  height: 22px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left bottom;
`;

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = value => {
    api.patchVotes(this.props.id, value, this.props.type);

    this.setState(
      currentState => {
        return { optimisticVotes: currentState.optimisticVotes + value };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <VoterContainer>
        <UpVoteBtn
          onClick={() => {
            this.handleClick(+1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          Up Vote
        </UpVoteBtn>

        <Votes>{this.props.votes + this.state.optimisticVotes}</Votes>

        <DownVoteBtn
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes < 0}
        >
          Down Vote
        </DownVoteBtn>
        {this.props.comment_count && (
          <CommentCounterContainer>
            {this.props.comment_count}
          </CommentCounterContainer>
        )}
      </VoterContainer>
    );
  }
}

export default Voter;
