import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "@reach/router";

//COMPONENT STYLING

const rock = keyframes`
  0%{transform: rotate(0deg)}
  25%{transform: rotate(10deg)}
  75%{transform: rotate(-10deg)}
  100%{transform: rotate(0deg)}
`;

const HomeP = styled.p`
  color: white;
  &:hover {
    text-shadow: 0 0 1px white;
    animation: ${rock} 1s 0s both;
  }
`;

const TopicP = styled.p`
  color: white;
  &:hover {
    text-shadow: 0 0 1px white;
    animation: ${rock} 1s 0s both;
  }
`;

const Navigation = styled.nav`
  @media only screen and (min-width: 601px) {
    /* DESKTOP */
    grid-column: 1/3;
    background-color: #143138;
    color: white;
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;
  }

  grid-row: 2/3;
  background-color: #143138;
  color: white;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 8px 6px -3px #292929;
  z-index: 1;
`;

const NavBar = () => {
  return (
    <Navigation>
      <Link to="/">
        <HomeP>Home</HomeP>
      </Link>
      <Link to="/topics">
        <TopicP>Topics</TopicP>
      </Link>
    </Navigation>
  );
};

export default NavBar;
