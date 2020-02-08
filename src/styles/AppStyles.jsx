import styled from "styled-components";

const AppStyles = styled.div`
  /* Mobile */
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 50px 100px 1fr;
    border: solid;
  }
`;

export { AppStyles };
