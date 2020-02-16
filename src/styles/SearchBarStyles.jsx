import styled from "styled-components";

export const SearchForm = styled.form`
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
  text-align: center;
  grid-column-start: 3;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
`;

export const SearchFormInput = styled.input`
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

export const SearchFormLabel = styled.label`
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  border: solid 1px #407d90;
  border-radius: 5px;
  padding-top: 5px;
  color: white;
  background-color: #376b7b;
  font-family: Spartan;
  text-align: center;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;
