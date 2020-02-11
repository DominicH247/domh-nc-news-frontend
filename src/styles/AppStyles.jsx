import styled from "styled-components";

const AppStyles = styled.div`
  @media only screen and (max-width: 600px) {
    /* Mobile */
    text-decoration: none;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 130px 55px 100vh;

    border-style: dotted;
    border-color: red;
  }
`;

export { AppStyles };
