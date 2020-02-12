import styled from "styled-components";

const AppStyles = styled.div`
  /* Desktop */
  @media only screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: 210px auto;
    grid-template-rows: 130px 55px auto;
  }

  @media only screen and (max-width: 600px) {
    /* Mobile */
    text-decoration: none;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 130px 55px auto;

    border-style: dotted;
    border-color: red;
  }
`;

export { AppStyles };
