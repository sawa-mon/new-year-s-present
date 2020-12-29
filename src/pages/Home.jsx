import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initialState from "../reducks/store/intialState";

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
    <div>
      <div>Home</div>
      <h2>現在、{yearsMoniter}です。</h2>
      {years.month === 12 && (
        <h3>
          新年まで残り{newYearTime}
          <br />
          そろそろお年玉を用意しよう
        </h3>
      )}
      <p>それぞれの金額を見る</p>
      <button
        onClick={() => {
          history.push("/presentsview");
        }}
      >
        {years.year + 1}
        年1月のお年玉の金額を確認する
      </button>
      <button
        onClick={() => {
          history.push("/lastyearspresentsview");
        }}
      >
        {years.year}年1月のお年玉の金額を確認する
      </button>
      <button onClick={() => history.push("/comparisons")}>
        {years.year + 1}年と{years.year}年のお年玉金額を比較する
      </button>
      <button onClick={() => history.push("/signin")}>確認を終了する</button>
    </div>
  );
};
