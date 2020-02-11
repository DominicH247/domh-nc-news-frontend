import React, { Component, createContext } from "react";

export const UserLogInContext = createContext();

class UserLogInContextProvider extends Component {
  state = {
    username: "jessjelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly",
    OutAvatarUrl: `https://image.flaticon.com/icons/svg/1177/1177568.svg`,
    isLoggedIn: true
  };

  LogInClick = () => {
    this.setState(
      currentState => {
        return {
          isLoggedIn: !currentState.isLoggedIn
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <UserLogInContext.Provider
        value={{ ...this.state, LogInClick: this.LogInClick }}
      >
        {this.props.children}
      </UserLogInContext.Provider>
    );
  }
}

export default UserLogInContextProvider;
