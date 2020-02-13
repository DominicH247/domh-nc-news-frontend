import React, { Component } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
  text-align: center;
  grid-column-start: 3;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
`;

const SearchFormInput = styled.input`
  @media only screen and (max-width: 400px) {
    width: 120px;
    font-size: 0.8em;
  }
  width: 150px;
  border-radius: 5px;
  font-family: Spartan;
  padding-top: 5px;
  padding-left: 10px;
  margin-left: 10px;
`;

const SearchFormLabel = styled.label`
  margin-right: 10px;
`;

const SearchButton = styled.button`
  border: solid 1px #407d90;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
  text-align: center;
`;

class SearchBar extends Component {
  state = {
    searchInput: ""
  };

  handleFormInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchInput: "" });
    this.props.applySearchFilter(this.state.searchInput);
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormLabel>
          Search:
          <SearchFormInput
            type="text"
            onChange={this.handleFormInputChange}
            value={this.state.searchInput}
            placeholder="By article title"
          />
        </SearchFormLabel>
        <SearchButton>Search</SearchButton>
      </SearchForm>
    );
  }
}

export default SearchBar;
