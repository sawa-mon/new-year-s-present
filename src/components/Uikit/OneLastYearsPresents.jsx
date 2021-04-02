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
    isOppoInfos.forEach((isOppoInfo) => {
      switch (true) {
        case isOppoInfo.age >= 16:
          isOppoInfo.money = 5000;
          break;
        case isOppoInfo.age >= 13:
          isOppoInfo.money = 3000;
          break;
        case isOppoInfo.age >= 7:
          isOppoInfo.money = 2000;
          break;
        case isOppoInfo.age <= 6:
          isOppoInfo.money = 1000;
          break;
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 800);
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
