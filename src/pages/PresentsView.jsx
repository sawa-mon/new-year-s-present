import React from "react";
import { useHistory } from "react-router";
import { Presents } from "../components/Uikit/Presents";
import styled from "styled-components";

export const PresentsView = () => {
  const history = useHistory();
  const years = new Date().getFullYear();
  return (
    <StyledSection>
      <h2>{years + 1}年のお年玉金額</h2>
      <Wrap>
        <StyledYearInfo>{years + 1}年の金額は…</StyledYearInfo>
        <Presents />
      </Wrap>
      <StyledButton
        onClick={() => {
          history.push("/");
        }}
      >
        ホームページに戻る
      </StyledButton>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  width: 350px;
  height: 100vh;
  margin: auto;
`;

const StyledButton = styled.button`
  width: 320px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #99d8ff;
  margin: 8px;
`;

const StyledYearInfo = styled.h2`
  font-size: 20px;
  padding: 3px;
`;

const Wrap = styled.div`
  width: 300px;
  height: 285px;
  border-style: groove;
`;
