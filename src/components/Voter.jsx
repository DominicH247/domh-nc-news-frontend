import React, { Component } from "react";
import * as api from "../utils/api";
import styled, { keyframes } from "styled-components";
import arrow from "../images/up-clear-white.png";
import arrowActive from "../images/arrow-solid-white.png";
import CommentIcon from "../images/comment-clear-white.png";

const VoterContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
`;

const rockUpArrow = keyframes`
  0%{ transform: rotate(0deg)};
  25%{transform: rotate(25deg)}
  50%{transform: rotate(-25deg)}
  100%{transform: rotate(0deg)};
`;

const rockDownArrow = keyframes`
  0%{ transform: rotate(180deg)};
  25%{transform: rotate(205deg)}
  50%{transform: rotate(155deg)}
  100%{transform: rotate(180deg)};
`;

const UpVoteBtn = styled.button`
  background-image: url(${props => props.arrow});
  height: 20px;
  width: 20px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  color: transparent;
  &:hover {
    animation: ${rockUpArrow} 1s 0s both;
  }
`;

const DownVoteBtn = styled.button`
  background-image: url(${props => props.arrow});
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  color: transparent;
  &:hover {
    animation: ${rockDownArrow} 1s 0s both;
  }
`;

const Votes = styled.p`
  margin: 0px 10px 0px 15px;
  width: 20px;
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
          arrow={this.state.optimisticVotes > 0 ? arrowActive : arrow}
          onClick={() => {
            this.handleClick(+1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          Up Vote
        </UpVoteBtn>

        <Votes>{this.props.votes + this.state.optimisticVotes}</Votes>

        <DownVoteBtn
          arrow={this.state.optimisticVotes < 0 ? arrowActive : arrow}
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
