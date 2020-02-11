import React from "react";
import { UserLogInContext } from "../contexts/UserLogInContext";
import styled from "styled-components";

// USER ICON STYLING
const UserIconLoggedIn = styled.div`
  grid-column: 3/4;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 90px;
  width: 90px;
  background-image: url(${props => props.avatar_url});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: top;
  /* border: solid black; */
  border-radius: 10px;
  color: white;
  text-align: center;
`;

const UserIconLoggedOut = styled.div`
  grid-column: 3/4;
  margin-top: 20px;
  height: 90px;
  width: 90px;
  background-image: url(${props => props.OutAvatarUrl});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: top;
  /* border: solid black; */
  border-radius: 10px;
  color: white;
  text-align: center;
`;

const UserIconName = styled.p`
  margin-top: 60px;
  margin-bottom: 0;
  text-align: center;
`;

const LogInButton = styled.button`
  grid-column: 3/4;
  border: solid 1px #407d90;
  border-radius: 5px;
  color: white;
  background-color: #407d90;
  font-family: Spartan;
  text-align: center;
`;

const CurrentUserTile = () => {
  return (
    <UserLogInContext.Consumer>
      {context => {
        const {
          username,
          avatar_url,
          OutAvatarUrl,
          isLoggedIn,
          LogInClick
        } = context;

        return (
          <>
            {isLoggedIn ? (
              <UserIconLoggedIn avatar_url={avatar_url}>
                <UserIconName>{username}</UserIconName>
                <LogInButton onClick={LogInClick}>Sign Out</LogInButton>
              </UserIconLoggedIn>
            ) : (
              <UserIconLoggedOut OutAvatarUrl={OutAvatarUrl}>
                <UserIconName>Log In</UserIconName>
                <LogInButton onClick={LogInClick}>Sign In</LogInButton>
              </UserIconLoggedOut>
            )}
          </>
        );
      }}
    </UserLogInContext.Consumer>
  );
};

export default CurrentUserTile;
