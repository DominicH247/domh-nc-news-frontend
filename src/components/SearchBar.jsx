import React, { Component } from "react";
import {
  SearchForm,
  SearchFormInput,
  SearchFormLabel,
  SearchButton
} from "../styles/SearchBarStyles";

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
