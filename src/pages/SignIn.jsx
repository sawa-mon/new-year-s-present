import React from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase/index";

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
    <div>
      <div>SignIn</div>
      <h2>お年玉金額確認アプリ</h2>
      <button onClick={() => anonymousLogin()}>確認画面へ行く</button>
    </div>
  );
};
