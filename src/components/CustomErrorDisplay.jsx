import React from "react";
import styled from "styled-components";

const ErrorSection = styled.section`
  text-align: center;
  width: 100vw;
  font-family: Spartan;
  color: white;
  font-size: 1.5em;
`;

const ErrImg = styled.div`
  background-image: url(${props => props.icon});
  height: 350px;
  width: 100vw;
  border: none;
  margin-top: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CustomErrorDisplay = ({ msg, status }) => {
  console.log(status);
  return (
    <ErrorSection>
      <ErrImg icon="https://image.flaticon.com/icons/svg/2298/2298239.svg"></ErrImg>
      <p>{msg}!</p>
    </ErrorSection>
  );
};

export default CustomErrorDisplay;
