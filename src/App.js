import React, { Component } from "react";
import { AppStyles } from "./styles/AppStyles.jsx";
import "./App.css";
import Title from "./components/Title.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <AppStyles>
        <Title />
      </AppStyles>
    );
  }
}

export default App;
