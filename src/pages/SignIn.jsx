import React from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase/index";
import styled from "styled-components";

export const SignIn = () => {
  const history = useHistory();

  const anonymousLogin = async () => {
    await auth
      .signInAnonymously()
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <StyledSection>
      <StyledYearInfo>お年玉金額確認アプリ</StyledYearInfo>
      <StyledButton onClick={() => anonymousLogin()}>
        確認画面へ行く
      </StyledButton>
      <p>確認画面へ移動して金額の確認をしよう！！</p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  width: 350px;
  height: 100vh;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  display: grid;
  place-items: center;
  width: 320px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #99d8ff;
  margin: 10px;
`;

const StyledYearInfo = styled.h2`
  font-size: 20px;
  padding: 3px;
  margin: 0;
`;
