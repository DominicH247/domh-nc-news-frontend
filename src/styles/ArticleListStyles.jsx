import styled from "styled-components";

export const MainStyled = styled.main`
  @media only screen and (min-width: 601px) {
    /* DESKTOP */
    width: 99vw;
    display: grid;
    grid-template-columns: auto 30% 40% auto;
    grid-template-rows: 100px auto;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    /* MOBILE */
    width: 80%;
    margin: 0 auto;
    background-color: #407d90;
    height: 100%;
  }
`;

export const MainListH1 = styled.h1`
  @media only screen and (min-width: 601px) {
    grid-column-start: 3;
    text-align: center;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    /* MOBILE */
    text-align: center;
    color: white;
  }
`;

// FORM STYLING
export const SortByForm = styled.form`
  @media only screen and (min-width: 601px) {
    grid-column-start: 3;
    text-align: center;
    font-size: 1em;
  }

  /* MOBILE */
  color: white;
  margin-bottom: 10px;
`;

export const SortByFormLabel = styled.label`
  /* MOBILE */
  margin-left: 0px;
`;

export const SortByFormSelect = styled.select`
  margin-left: 10px;
  font-family: Spartan;
  border-color: #376b7b;
  border-radius: 5px;
  background-color: #376b7b;
  color: white;
`;

export const NoArticlesP = styled.p`
  color: white;
  text-align: center;
  grid-area: 5/3/6/4;
`;

export const RefreshListButton = styled.button`
  grid-area: 6/3/7/4;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border: solid 1px #376b7b;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
`;

export const PostArticleContainer = styled.div`
  grid-column: 3/4;
`;

export const PostArticleButton = styled.button`
  grid-area: 4/3/5/4;
  text-align: center;
  border: solid 1px #376b7b;
  border-radius: 5px;
  padding-top: 5px;
  margin-bottom: 10px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;
