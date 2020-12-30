import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return (
    <StyledButton
      addTweet={props.addTweet}
      type={"button"}
      onClick={() => props.onClick()}
    >
      {props.label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${(props) => (props.addTweet ? "#99d8ff" : "#a9d69c")};
  width: 320px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
