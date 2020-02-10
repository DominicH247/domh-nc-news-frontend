import styled from "styled-components";

const AppStyles = styled.div`
  /* Mobile */
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 120px 55px 100vh;

    border-style: dotted;
    border-color: red;
  }
`;

export { AppStyles };
