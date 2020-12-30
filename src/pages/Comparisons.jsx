import React from "react";
import { useHistory } from "react-router";
import { LastYearsPresents } from "../components/Uikit/LastYearsPresents";
import { Presents } from "../components/Uikit/Presents";
import styled from "styled-components";

export const Comparisons = () => {
  const history = useHistory();
  const years = new Date().getFullYear();
  return (
    <StyledSectiom>
      <StyledYearInfo>
        {years + 1}年と{years}年のお年玉金額
      </StyledYearInfo>
      <Wrap>
        <StyledYearInfo>{years + 1}年のお年玉金額</StyledYearInfo>
        <Presents />
      </Wrap>
      <Wrap>
        <StyledYearInfo>{years}年のお年玉金額</StyledYearInfo>
        <LastYearsPresents />
      </Wrap>
      <StyledButton onClick={() => history.push("/")}>
        ホームページに戻る
      </StyledButton>
    </StyledSectiom>
  );
};

const StyledSectiom = styled.section`
  display: grid;
  place-items: center;
  background: #bfbfbf;
  height: 100vh;
`;

const StyledYearInfo = styled.h2`
  font-size: 20px;
`;

const Wrap = styled.div`
  width: 300px;
  height: 250px;
  border-style: groove;
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
