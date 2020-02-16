import React from "react";
import { Link } from "@reach/router";
import { HomeP, TopicP, Navigation } from "../styles/NavBarStyles";

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
