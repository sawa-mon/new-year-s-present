import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initialState from "../reducks/store/intialState";
import styled from "styled-components";

export const Home = () => {
  const history = useHistory();
  const years = initialState.years;
  const yearsMoniter = `西暦${years.year}年${years.month}月${years.day}日`;

  const [times, setTimes] = useState(initialState.times);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes({
        hour: new Date().getHours(),
        minit: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const newYearTime = `
  ${Math.abs(years.day - 31)}日と
  ${Math.abs(times.hour - 23)}時間
  ${Math.abs(times.minit - 59)}分
  ${Math.abs(times.second - 59)}秒`;

  return (
    <StyledSection>
      <StyledYearInfo>現在、{yearsMoniter}です。</StyledYearInfo>
      {years.month === 12 && (
        <StyledInfo>
          新年まで残り{newYearTime}
          <br />
          そろそろお年玉を用意しよう
        </StyledInfo>
      )}
      <StyledInfo>金額を確認する</StyledInfo>
      <Wrap>
        <StyledButton
          onClick={() => {
            history.push("/presentsview");
          }}
        >
          {years.year + 1}
          年1月のお年玉の金額を確認する
        </StyledButton>
        <StyledButton
          onClick={() => {
            history.push("/lastyearspresentsview");
          }}
        >
          {years.year}年1月のお年玉の金額を確認する
        </StyledButton>
        <StyledButton
          onClick={() => {
            history.push("/onelastyearspresentsview");
          }}
        >
          {years.year - 1}年1月のお年玉の金額を確認する
        </StyledButton>
        <StyledButton onClick={() => history.push("/comparisons")}>
          {years.year + 1}年と{years.year}年のお年玉金額を比較する
        </StyledButton>
        <StyledButton onClick={() => history.push("/signin")}>
          確認を終了する
        </StyledButton>
      </Wrap>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  background: #bfbfbf;
  height: 100vh;
`;

const StyledYearInfo = styled.h2`
  font-size: 20px;
`;
const StyledInfo = styled.h3`
  font-size: 17px;
  text-align: center;
`;

const Wrap = styled.div`
  display: grid;
  place-items: center;
  margin: 20px;
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
