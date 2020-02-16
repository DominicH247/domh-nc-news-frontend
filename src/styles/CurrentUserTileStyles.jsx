import styled from "styled-components";

export const UserIconLoggedIn = styled.div`
  grid-column: 3/4;
  grid-row: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 90px;
  width: 90px;
  background-image: url(${props => props.avatar_url});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: top;
  /* border: solid black; */
  border-radius: 10px;
  color: white;
  text-align: center;
  justify-content: center;
`;

export const UserIconLoggedOut = styled.div`
  grid-column: 3/4;
  margin-top: 20px;
  height: 90px;
  width: 90px;
  background-image: url(${props => props.OutAvatarUrl});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

export const UserIconName = styled.p`
  margin-top: 60px;
  margin-bottom: 0;
  text-align: center;
`;

export const LogInForm = styled.form`
  margin-top: 55px;
`;

export const UserSelect = styled.select`
  text-align: left;
  border-radius: 5px;
  font-family: Spartan;
  border-color: #376b7b;
  border-radius: 5px;
  background-color: #376b7b;
  color: white;
  margin-bottom: 5px;
  width: 62px;
`;

export const LogInButton = styled.button`
  grid-column: 3/4;
  border: solid 1px #407d90;
  border-radius: 5px;
  padding-top: 3px;
  color: white;
  background-color: #407d90;
  font-family: Spartan;
  text-align: center;
  &:hover {
    box-shadow: 0 0 5px white;
  }
`;
