import React from "react";
import { ErrorSection, ErrImg } from "../styles/CustomErrorDisplayStyles";

const CustomErrorDisplay = ({ msg, status }) => {
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
