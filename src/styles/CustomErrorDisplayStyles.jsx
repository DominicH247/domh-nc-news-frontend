import styled from "styled-components";

export const ErrorSection = styled.section`
  text-align: center;
  width: 100vw;
  font-family: Spartan;
  color: white;
  font-size: 1.5em;
`;

export const ErrImg = styled.div`
  background-image: url(${props => props.icon});
  height: 350px;
  width: 100vw;
  border: none;
  margin-top: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
