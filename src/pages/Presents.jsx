import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initialState from "../reducks/store/intialState";
import { db } from "../firebase";
import { NameView } from "./NameView";
import { Loading } from "../components/Uikit/Loading";

export const Presents = () => {
  const history = useHistory();
  const years = initialState.years;
  const [isValue, setIsValue] = useState(2000);
  const [loading, setLoading] = useState(true);
  const [isOppoInfos, setIsOppoInfos] = useState([
    {
      name: "",
      birthday: "",
      number: "",
      age: "",
    },
  ]);

  useEffect(() => {
    // const age = db.collection("opponents").doc().get();
    // console.log(age);

    const unSub = db
      .collection("opponents")
      .orderBy("number", "asc")
      .onSnapshot((snapshot) =>
        setTimeout(() => {
          setLoading(false);
          setIsOppoInfos(
            snapshot.docs.map((doc) => ({
              key: doc.id,
              name: doc.data().name,
              birthday: doc.data().birthdayYear,
              number: doc.data().number,
              age: new Date().getFullYear() - Math.abs(doc.data().birthdayYear),
            }))
          );
        }, 100)
      );

    return () => {
      unSub();
    };
  }, [years]);

  return (
    <div>
      <div>Presents</div>
      <button onClick={() => history.push("/")}>ホーム画面に戻る</button>
      <h2>{years.year + 1}年のお年玉金額</h2>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {isOppoInfos.map((isOppoInfo) => (
              <NameView
                key={isOppoInfo.name}
                name={isOppoInfo.name}
                birthday={isOppoInfo.birthday}
                number={isOppoInfo.number}
                age={isOppoInfo.age}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
