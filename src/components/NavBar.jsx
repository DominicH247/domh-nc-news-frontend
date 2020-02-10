import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const NavBar = () => {
  const Navigation = styled.nav`
    grid-row: 2/3;
    background-color: #143138;
    color: white;
    display: flex;
    justify-content: space-around;
  `;

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
