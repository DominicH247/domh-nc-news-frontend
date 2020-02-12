import React, { Component, createContext } from "react";
import * as api from "../utils/api";

export const UserLogInContext = createContext();

class UserLogInContextProvider extends Component {
  state = {
    users: [],
    username: "jessjelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly",
    OutAvatarUrl: `https://image.flaticon.com/icons/svg/1177/1177568.svg`,
    isLoggedIn: true
  };

  componentDidMount = () => {
    api.getAllUsers().then(users => {
      this.setState({ users });
    });
  };

  setSelectedUser = selectedUser => {
    api.getUserByUsername(selectedUser).then(user => {
      this.setState({
        username: user.username,
        avatar_url: user.avatar_url,
        name: user.name
      });
    });
  };

  LogInClick = () => {
    this.setState(currentState => {
      return {
        isLoggedIn: !currentState.isLoggedIn
      };
    });
  };

  render() {
    return (
      <UserLogInContext.Provider
        value={{
          ...this.state,
          LogInClick: this.LogInClick,
          setSelectedUser: this.setSelectedUser
        }}
      >
        {this.props.children}
      </UserLogInContext.Provider>
    );
  }
}

export default UserLogInContextProvider;
