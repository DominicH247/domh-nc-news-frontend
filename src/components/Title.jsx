import React from "react";
import styled from "styled-components";
import logo from "../images/nc-news-logo.png";

const Title = () => {
  const TitleHeaderContainer = styled.header`
    grid-template-columns: 150px 1fr;
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

  return (
    <TitleHeaderContainer>
      <Logo></Logo>
    </TitleHeaderContainer>
  );
};

export default Title;
