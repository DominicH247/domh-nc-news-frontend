import React, { Component } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  text-align: center;
  grid-column: 2;
  justify-content: center;
  padding-top: 50px;
`;

const SearchSelect = styled.select`
  height: 2em;
`;

class SearchBar extends Component {
  state = {
    searchInput: "",
    selectInput: ""
  };

  handleFormInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleOnChange = event => {
    this.setState({ selectInput: event.target.value }, () => {});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchInput: "" });
    this.props.applySearchFilter(this.state.searchInput);
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchSelect onChange={this.handleOnChange}>
          <option value="articles">articles</option>
          <option value="topics">topic</option>
          <option value="users">user</option>
        </SearchSelect>
        <label>
          Search:
          <input
            type="text"
            onChange={this.handleFormInputChange}
            value={this.state.searchInput}
          />
        </label>
        <button>Search</button>
      </SearchForm>
    );
  }
}

export default SearchBar;
