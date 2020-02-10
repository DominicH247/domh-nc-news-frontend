import React, { Component, createContext } from "react";

export const ArticleDetailContext = createContext();

class ArticleDetailProvider extends Component {
  state = {
    article: {}
  };

  handleClick = event => {
    console.log(event);
  };

  render() {
    return (
      <ArticleDetailContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ArticleDetailContext.Provider>
    );
  }
}

export default ArticleDetailProvider;
