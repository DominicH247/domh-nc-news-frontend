import styled from "styled-components";

export const DeleteButton = styled.button`
  border: solid 2px #407d90;
  border-radius: 5px;
  color: white;
  background-color: #376b7b;
  padding-top: 5px;
  font-family: Spartan;
  text-align: center;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;

export const CustomErrorP = styled.p`
  text-align: center;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: rgba(184, 116, 37, 0.8);
`;
