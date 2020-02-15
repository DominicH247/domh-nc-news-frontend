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

  const errorImg = {
    404: "https://image.flaticon.com/icons/svg/2298/2298239.svg",
    400: "https://image.flaticon.com/icons/svg/812/812867.svg",
    500: "https://image.flaticon.com/icons/svg/2326/2326890.svg",
    Network: "https://image.flaticon.com/icons/svg/1201/1201519.svg"
  };

  return (
    <ErrorSection>
      <ErrImg icon={errorImg[status]}></ErrImg>
      <p>{msg}!</p>
    </ErrorSection>
  );
};

export default CustomErrorDisplay;
