import React from "react";
import styled from "styled-components";
import logo from "../images/nc-news-logo.png";
import CurrentUserTile from "./CurrentUserTile";

// COMPONENT STYLING
const TitleHeaderContainer = styled.header`
  @media only screen and (min-width: 601px) {
    grid-area: 1/1/2/3;
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    width: 100vw;
    height: 130px;
    justify-content: center;
    background-color: #154854;
  }

  @media only screen and (max-width: 600px) {
    /* MOBILE  */
    grid-template-columns: 150px 1fr 120px;
    display: grid;
    height: 130px;
    background-color: #154854;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  /* MOBILE */
  grid-column: 1/2;
  grid-row: 1;
  height: 100px;
  padding: 5px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  margin-top: 10px;
  text-align: center;
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
