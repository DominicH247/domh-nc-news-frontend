import styled from "styled-components";

export const MainStyledDesktop = styled.main`
  margin: 0;
  padding-left: 100%;
  padding-right: 100%;
  width: 100vw;
`;

export const MainStyled = styled.main`
  @media only screen and (min-width: 601px) {
    grid-column-start: 2;
  }
  /* MOBILE */
  width: 80%;
  margin: 0 auto;
  background-color: #407d90;
`;

export const MainListH1 = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

export const AllArticlesButton = styled.button`
  text-align: center;
  border: solid 1px #376b7b;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
  margin-bottom: 10px;
  width: 100%;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;
