import React from "react";
import styled from "styled-components";
import logo from "../images/nc-news-logo.png";
import CurrentUserTile from "./CurrentUserTile";

// COMPONENT STYLING
const TitleHeaderContainer = styled.header`
  grid-template-columns: 150px 1fr 100px;
  display: grid;
  height: 120px;
  background-color: #154854;
`;

const Logo = styled.div`
  grid-column: 1/2;
  height: 100px;
  padding: 5px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  margin-top: 10px;
`;

const Title = () => {
  return (
    <TitleHeaderContainer>
      <Logo></Logo>
      <CurrentUserTile />
    </TitleHeaderContainer>
  );
};

export default Title;
