import React from "react";
import styled from "styled-components";
import logo from "../images/nc-news-logo.png";
import { UserLogInContext } from "../contexts/UserLogInContext";

// COMPONENT STYLING
const TitleHeaderContainer = styled.header`
  grid-template-columns: 150px 1fr 100px;
  display: grid;
  height: 120px;
  background-color: #154854;
`;

const Logo = styled.div`
  grid-column: 1/2;
  height: 100px;
  padding: 5px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  margin-top: 10px;
`;

const Title = () => {
  return (
    <UserLogInContext.Consumer>
      {context => {
        const { username, avatar_url, isLoggedIn } = context;

        // USER ICON STYLING
        const UserIcon = styled.div`
          grid-column: 3/4;
          margin-top: 20px;
          height: 90px;
          width: 90px;
          background-image: url(${avatar_url});
          background-size: 50px;
          background-repeat: no-repeat;
          background-position: top;
          /* border: solid black; */
          border-radius: 10px;
          color: white;
        `;

        const UserIconName = styled.p`
          margin-top: 60px;
          text-align: center;
        `;

        return (
          <TitleHeaderContainer>
            <Logo></Logo>
            <UserIcon>
              <UserIconName>{username}</UserIconName>
            </UserIcon>
          </TitleHeaderContainer>
        );
      }}
    </UserLogInContext.Consumer>
  );
};

export default Title;
