import React from "react";
import styled from "styled-components";

export const NameView = (props) => {
  const { money, age, name } = props;
  return (
    <StyledSection>
      <StyledNameInfo>
        {name}({age}歳)は{money}円
      </StyledNameInfo>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  height: 26px;
`;

const StyledNameInfo = styled.section`
  display: grid;
  place-items: start;
  width: 180px;
`;
