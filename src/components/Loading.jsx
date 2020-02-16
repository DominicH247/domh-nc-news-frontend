import React, { Component } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { LoadingDiv, override } from "../styles/LoadingStyles";

class Loading extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <LoadingDiv>
        <CircleLoader
          css={override}
          size={150}
          color={"white"}
          loading={this.state.loading}
        />
      </LoadingDiv>
    );
  }
}

export default Loading;
