import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { saveYearsAction } from "../reducks/years/actions";

export const Home = () => {
  const dispatch = useDispatch;
  const history = useHistory();

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const week = date.getDay();
  const day = date.getDate();
  const weeks = new Array("日", "月", "火", "水", "木", "金", "土");

  //saveNowDateのonClick処理未
  const saveNowDate = () => {
    const nowdate = {
      year: year,
      month: month,
      week: week,
      day: day,
    };
    dispatch(saveYearsAction(nowdate));
  };

  return (
    <div>
      <div>Home</div>
      <h2>
        現在、
        {"西暦" +
          year +
          "年" +
          month +
          "月" +
          day +
          "日 " +
          "(" +
          weeks[week] +
          ")"}
        です
      </h2>
      <p>それぞれの金額を見る</p>
      <button onClick={() => history.push("/presents")}>
        {year + 1}年1月にあげるお年玉の金額を確認する
      </button>
      <button onClick={() => history.push("/lastyearspresents")}>
        {year}年1月のお年玉の金額を確認する
      </button>
      <button onClick={() => history.push("/comparisons")}>
        {year + 1}年と{year}年にあげたお年玉の金額を比較する
      </button>
      <button onClick={() => history.push("/signin")}>確認を終了する</button>
    </div>
  );
};
