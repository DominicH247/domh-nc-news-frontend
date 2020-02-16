import styled, { keyframes } from "styled-components";
import CommentIcon from "../images/comment-clear-white.png";

export const VoterContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const rockUpArrow = keyframes`
  0%{ transform: rotate(0deg)};
  25%{transform: rotate(25deg)}
  50%{transform: rotate(-25deg)}
  100%{transform: rotate(0deg)};
`;

export const rockDownArrow = keyframes`
  0%{ transform: rotate(180deg)};
  25%{transform: rotate(205deg)}
  50%{transform: rotate(155deg)}
  100%{transform: rotate(180deg)};
`;

export const UpVoteBtn = styled.button`
  background-image: url(${props => props.arrow});
  height: 20px;
  width: 20px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  color: transparent;
  &:hover {
    animation: ${rockUpArrow} 1s 0s both;
  }
  &:focus {
    outline: none;
  }
`;

export const DownVoteBtn = styled.button`
  background-image: url(${props => props.arrow});
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  color: transparent;
  &:hover {
    animation: ${rockDownArrow} 1s 0s both;
  }
  &:focus {
    outline: none;
  }
`;

export const Votes = styled.p`
  margin: 0px 10px 0px 15px;
  width: 20px;
`;

export const CommentCounterContainer = styled.div`
  background-image: url(${CommentIcon});
  text-align: right;
  margin-top: 2px;
  margin-left: 20px;
  width: 50px;
  height: 22px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left bottom;
`;
