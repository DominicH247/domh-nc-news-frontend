import React, { Component } from "react";
import * as api from "../utils/api";
import arrow from "../images/up-clear-white.png";
import arrowActive from "../images/arrow-solid-white.png";

import {
  VoterContainer,
  UpVoteBtn,
  DownVoteBtn,
  Votes,
  CommentCounterContainer
} from "../styles/VoterStyles";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = value => {
    api.patchVotes(this.props.id, value, this.props.type);

    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + value };
    });
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

        {this.props.type !== "comments" && (
          <CommentCounterContainer>
            {this.props.comment_count}
          </CommentCounterContainer>
        )}
      </VoterContainer>
    );
  }
}

export default Voter;
