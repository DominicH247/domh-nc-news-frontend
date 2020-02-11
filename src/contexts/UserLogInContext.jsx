import React, { Component, createContext } from "react";

export const UserLogInContext = createContext();

class UserLogInContextProvider extends Component {
  state = {
    username: "jessJelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly",
    isLoggedIn: true
  };

  render() {
    return (
      <UserLogInContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UserLogInContext.Provider>
    );
  }
}

export default UserLogInContextProvider;
