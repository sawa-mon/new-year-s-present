import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { NameView } from "./NameView";
import { Loading } from "./Loading";
import styled from "styled-components";

export const OneLastYearsPresents = () => {
  const years = new Date().getFullYear();
  const [loading, setLoading] = useState(true);
  const [isOppoInfos, setIsOppoInfos] = useState([
    {
      age: "",
      name: "",
      birthday: "",
      number: "",
    },
  ]);
  const [allMenbers, setAllMenbers] = useState([]);

  useEffect(() => {
    const unSub = db
      .collection("opponents")
      .orderBy("number", "asc")
      .onSnapshot((snapshot) =>
        setIsOppoInfos(
          snapshot.docs.map((doc) => ({
            key: doc.id,
            age: years - 1 - Math.abs(doc.data().birthdayYear),
            name: doc.data().name,
            birthday: doc.data().birthdayYear,
            number: doc.data().number,
          }))
        )
      );

    return () => {
      unSub();
    };
  }, [years]);

  useEffect(() => {
    setTimeout(() => {
      const ryuusei = isOppoInfos[0];
      try {
        switch (true) {
          case ryuusei.age >= 16:
            ryuusei.money = 5000;
            break;
          case ryuusei.age >= 13:
            ryuusei.money = 3000;
            break;
          case ryuusei.age >= 7:
            ryuusei.money = 2000;
            break;
          case ryuusei.age <= 6:
            ryuusei.money = 1000;
            break;
        }
      } catch (e) {}

      const hiyori = isOppoInfos[1];
      try {
        switch (true) {
          case hiyori.age >= 16:
            hiyori.money = 5000;
            break;
          case hiyori.age >= 13:
            hiyori.money = 3000;
            break;
          case hiyori.age >= 7:
            hiyori.money = 2000;
            break;
          case hiyori.age <= 6:
            hiyori.money = 1000;
            break;
        }
      } catch (e) {}

      const riina = isOppoInfos[2];
      try {
        switch (true) {
          case riina.age >= 16:
            riina.money = 5000;
            break;
          case riina.age >= 13:
            riina.money = 3000;
            break;
          case riina.age >= 7:
            riina.money = 2000;
            break;
          case riina.age <= 6:
            riina.money = 1000;
            break;
        }
      } catch (e) {}

      const rikuu = isOppoInfos[3];
      try {
        switch (true) {
          case rikuu.age >= 16:
            rikuu.money = 5000;
            break;
          case rikuu.age >= 13:
            rikuu.money = 3000;
            break;
          case rikuu.age >= 7:
            rikuu.money = 2000;
            break;
          case rikuu.age <= 6:
            rikuu.money = 1000;
            break;
        }
      } catch (e) {}

      const yuuho = isOppoInfos[4];
      try {
        switch (true) {
          case yuuho.age >= 16:
            yuuho.money = 5000;
            break;
          case yuuho.age >= 13:
            yuuho.money = 3000;
            break;
          case yuuho.age >= 7:
            yuuho.money = 2000;
            break;
          case yuuho.age <= 6:
            yuuho.money = 1000;
            break;
        }
      } catch (e) {}

      const shuugo = isOppoInfos[5];
      try {
        switch (true) {
          case shuugo.age >= 16:
            shuugo.money = 5000;
            break;
          case shuugo.age >= 13:
            shuugo.money = 3000;
            break;
          case shuugo.age >= 7:
            shuugo.money = 2000;
            break;
          case shuugo.age <= 6:
            shuugo.money = 1000;
            break;
        }
      } catch (e) {}

      const naho = isOppoInfos[6];
      try {
        switch (true) {
          case naho.age >= 16:
            naho.money = 5000;
            break;
          case naho.age >= 13:
            naho.money = 3000;
            break;
          case naho.age >= 7:
            naho.money = 2000;
            break;
          case naho.age <= 6:
            naho.money = 1000;
            break;
        }
      } catch (e) {}
      setLoading(false);
      setAllMenbers(ryuusei, hiyori, riina, rikuu, yuuho, shuugo, naho);
    }, 1000);
  }, [isOppoInfos]);

  const moneyValue = isOppoInfos;
  const newValue = moneyValue.map((value) => value.money);
  const priceList = newValue;
  const sumPrice = priceList.reduce((prev, cur) => prev + cur);

  return (
    <div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div>
              {isOppoInfos.map((isOppoInfo) => (
                <NameView
                  key={isOppoInfo.name}
                  name={isOppoInfo.name}
                  birthday={isOppoInfo.birthday}
                  number={isOppoInfo.number}
                  age={isOppoInfo.age}
                  money={isOppoInfo.money}
                />
              ))}
            </div>
            <StyledSum>
              {years - 1}年の合計額は
              <strong>{sumPrice.toLocaleString()}円</strong>
              <br />
              だよ！！
            </StyledSum>
          </div>
        )}
      </div>
    </div>
  );
};

const StyledSum = styled.div`
  font-size: 17.4px;
  padding: 5px;
`;
