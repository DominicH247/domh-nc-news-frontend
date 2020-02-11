import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = value => {
    api.patchVotes(this.props.id, value);

    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + value };
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick(+1);
          }}
        >
          Up Vote
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          Down Vote
        </button>
      </div>
    );
  }
}
