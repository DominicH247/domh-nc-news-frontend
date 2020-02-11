import React from "react";
import styled from "styled-components";
import logo from "../images/nc-news-logo.png";
import CurrentUserTile from "./CurrentUserTile";

// COMPONENT STYLING
const TitleHeaderContainer = styled.header`
  /* MOBILE  */
  grid-template-columns: 150px 1fr 100px;
  display: grid;
  height: 130px;
  background-color: #154854;
  text-decoration: none;
`;

const Logo = styled.div`
  /* MOBILE */
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
