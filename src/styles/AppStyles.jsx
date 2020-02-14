import styled from "styled-components";

// CONSIDER REFACTOR TO GLOBAL STYLES

const AppStyles = styled.div`
  /* Desktop */
  @media only screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: 210px auto;
    grid-template-rows: 130px 55px auto;
    margin: 0;
    width: 100vw;
  }

  @media only screen and (max-width: 600px) {
    /* Mobile */
    text-decoration: none;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 130px 55px auto;
  }
`;

export { AppStyles };
