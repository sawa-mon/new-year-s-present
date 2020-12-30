import React from "react";
import { useHistory } from "react-router";
import { OneLastYearsPresents } from "../components/Uikit/OneLastYearsPresents";
import styled from "styled-components";

export const OneLastYearsPresentsView = () => {
  const history = useHistory();
  const years = new Date().getFullYear();

  return (
    <StyledSection>
      <h2>{years - 1}年のお年玉金額</h2>
      <Wrap>
        <StyledYearInfo>{years - 1}年の金額は…</StyledYearInfo>
        <OneLastYearsPresents />
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
  background: #bfbfbf;
  height: 100vh;
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
  height: 250px;
  border-style: groove;
`;
