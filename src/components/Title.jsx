import React from "react";
import CurrentUserTile from "./CurrentUserTile";
import { TitleHeaderContainer, Logo } from "../styles/TitleStyles";

const Title = () => {
  return (
    <TitleHeaderContainer>
      <Logo></Logo>
      <CurrentUserTile />
    </TitleHeaderContainer>
  );
};

export default Title;
