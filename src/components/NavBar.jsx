import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { ThemeContext } from "../contexts/ThemeContext";

//COMPONENT STYLING

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
`;

const NavBar = () => {
  return (
    <Navigation>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/topics">
        <p>Topics</p>
      </Link>
    </Navigation>
  );
};

export default NavBar;
