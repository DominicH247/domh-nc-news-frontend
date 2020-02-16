import React, { Component } from "react";
import { UserLogInContext } from "../contexts/UserLogInContext";
import {
  UserIconLoggedIn,
  UserIconLoggedOut,
  UserIconName,
  LogInForm,
  UserSelect,
  LogInButton
} from "../styles/CurrentUserTileStyles";

class CurrentUserTile extends Component {
  state = {
    selectedUser: ""
  };

  render() {
    return (
      <UserLogInContext.Consumer>
        {context => {
          const {
            users,
            username,
            avatar_url,
            OutAvatarUrl,
            isLoggedIn,
            LogInClick,
            setSelectedUser
          } = context;

          const handleChange = event => {
            this.setState({ selectedUser: event.target.value }, () => {
              setSelectedUser(this.state.selectedUser);
            });
          };

          return (
            <>
              {isLoggedIn ? (
                <UserIconLoggedIn avatar_url={avatar_url}>
                  <UserIconName>{username}</UserIconName>
                  <LogInButton onClick={LogInClick}>Sign Out</LogInButton>
                </UserIconLoggedIn>
              ) : (
                <UserIconLoggedOut OutAvatarUrl={OutAvatarUrl}>
                  {/* <UserIconName>Log In</UserIconName> */}
                  <LogInForm>
                    <UserSelect onChange={handleChange}>
                      <option>select a user</option>
                      {users.map(user => {
                        return (
                          <option key={user.username} value={user.username}>
                            {user.username}
                          </option>
                        );
                      })}
                    </UserSelect>
                    <LogInButton onClick={LogInClick}>Sign In</LogInButton>
                  </LogInForm>
                </UserIconLoggedOut>
              )}
            </>
          );
        }}
      </UserLogInContext.Consumer>
    );
  }
}

export default CurrentUserTile;
