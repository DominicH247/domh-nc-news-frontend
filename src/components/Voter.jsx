import React, { Component } from "react";
import * as api from "../utils/api";

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
      <div>
        <p>Votes: {this.props.votes + this.state.optimisticVotes}</p>
        <button
          onClick={() => {
            this.handleClick(+1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          Up Vote
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes < 0}
        >
          Down Vote
        </button>
      </div>
    );
  }
}

export default Voter;
