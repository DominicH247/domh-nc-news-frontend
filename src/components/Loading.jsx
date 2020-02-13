import React, { Component } from "react";
import { css } from "@emotion/core";
import styled from "styled-components";
import CircleLoader from "react-spinners/CircleLoader";

const LoadingDiv = styled.div`
  margin-top: 50px;
  width: 100vw;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
          color={"#123abc"}
          loading={this.state.loading}
        />
      </LoadingDiv>
    );
  }
}

export default Loading;
